import mongoose from 'mongoose';
import Event from '../models/event';
import Tools from '../models/tools';
import Snacks from '../models/snacks';
import Personnel from '../models/personnel';





const createEvent = async (req, res) => {

    const { eventName, startDate, startTime, hoursNumber, price, location } = req.body

    console.log(req.body);

    try {
        const newEvent = new Event({
            eventName,
            startDate,
            startTime,
            hoursNumber,
            price,
            location,
        });

        const savedEvent = await newEvent.save();

        const personnelIds = await Personnel.find().limit(2).select('_id');
        const snacksIds = await Snacks.find().limit(2).select('_id');
        const toolsIds = await Tools.find().limit(2).select('_id');

        savedEvent.personnel = personnelIds;
        savedEvent.snacks = snacksIds;
        savedEvent.tools = toolsIds;

        const updatedEvent = await savedEvent.save();

        res.json(updatedEvent);
        return updatedEvent;
    } catch (error) {
        console.error('Error creating event:', error.message);
        throw error;
    }

};





const eventServices = async (req, res) => {
    const { eventId } = req.params;
    const { tools, snacks } = req.body;


    console.log(req.params);
    try {

        const validEventId = mongoose.Types.ObjectId(eventId);

        const eventToUpdate = await Event.findById(validEventId);


        if (!eventToUpdate) {
            return res.status(404).json({ error: 'Event not found' });
        }

        // Retrieve tool and snack IDs from the database
        const toolIds = await Tools.find().limit(2).select('_id');
        const snackIds = await Snacks.find().limit(2).select('_id');

        // Map the tool and snack IDs to the corresponding arrays
        const toolResources = tools.map(tool => ({
            type: tool.type,
            quantity: tool.quantity,
            price: tool.price,
            available: tool.available,
        }));

        const snackResources = snacks.map(snack => ({
            type: snack.type,
            quantity: snack.quantity,
            price: snack.price,
            available: snack.available,
        }));

        // Add the resources to the event
        eventToUpdate.tools.push(...toolIds);
        eventToUpdate.snacks.push(...snackIds);
        eventToUpdate.resources.push(...toolResources, ...snackResources);

        // Save the updated event
        const updatedEvent = await eventToUpdate.save();

        res.json(updatedEvent);
    } catch (error) {
        console.error('Error adding resources to event:', error.message);
        res.status(500).json({ error: 'Error adding resources to event' });
    }
};



const deleteEvent = async (req, res) => {

};

export { createEvent, eventServices, deleteEvent };
