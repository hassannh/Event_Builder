import mongoose from 'mongoose';
import Event from '../models/event';

const createEvent = async (req, res) => {
    try {

        const { eventName, eventDate, eventLocation, visitors, servicId } = req.body;

        const formattedDate = new Date(eventDate);
        if (isNaN(formattedDate)) {
            return res.status(400).json({ error: 'Invalid eventDate format. Please provide a valid date.' });
        }

        const event = await Event.create({
            eventName,
            eventDate: formattedDate,
            eventLocation,
            visitors,
            servicId: new mongoose.Types.ObjectId(servicId),
        });

        res.status(201).json({ event });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const updateEvent = async (req, res) => {
    try {
       
        const eventId = req.params.id;
        const { eventName, eventDate, eventLocation, visitors, servicId } = req.body;

        
        if (!mongoose.Types.ObjectId.isValid(eventId)) {
            return res.status(400).json({ error: 'Invalid Event ID' });
        }

        const formattedDate = new Date(eventDate);

        
        const updateData = {
            eventName,
            eventDate: formattedDate,
            eventLocation,
            visitors,
            servicId: mongoose.Types.ObjectId(servicId),
        };

        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            updateData,
            { new: true, runValidators: true }
        );
        
        if (!updatedEvent) {
            return res.status(404).json({ error: 'Event not found' });
        }

        res.status(200).json({ event: updatedEvent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



const deleteEvent = async (req, res) => {
    try {
        
        const eventId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(eventId)) {
            return res.status(400).json({ error: 'Invalid Event ID' });
        }

        const deletedEvent = await Event.findByIdAndDelete(eventId);

        
        if (!deletedEvent) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export  {createEvent,updateEvent,deleteEvent};
