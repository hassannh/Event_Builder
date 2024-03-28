import mongoose from 'mongoose';
import Event from '../models/event';
import Tools from '../models/tools';
import Snacks from '../models/snacks';
import Personnel from '../models/personnel';




const createEvent = async (req, res) => {

 
    try {

        const { eventName, startDate, startTime, hoursNumber, location, personnel, tools ,userId} = req.body;

        console.log('useriddddd',req.body);
        

        const personnelIds = await Promise.all(personnel.map(async (item) => {
            const { type, quantity, price } = item;
            const personnelData = new Personnel({ type, quantity, price });
            const savedPersonnel = await personnelData.save();
            return savedPersonnel._id;
        }));

        const toolsIds = await Promise.all(tools.map(async (item) => {
            const { type, quantity, price } = item;
            const toolsData = new Tools({ type, quantity, price });
            const savedTools = await toolsData.save();
            return savedTools._id;
        }));


        const newEvent = new Event({
            eventName,
            startDate,
            startTime,
            hoursNumber,
            location,
            personnel: personnelIds,
            // snacks: snacksIds,
            tools: toolsIds,
            userId
        });

        const savedEvent = await newEvent.save();
        res.json(savedEvent);
        console.log(savedEvent);


    } catch (error) {
        console.error('Error creating event:', error.message);
    }

};




const GetEventsByUserId = async (req, res) => {
    try {
        const userId = req.params.userId; 

        const events = await Event.find({ userId: userId })
            .populate({
                path: 'personnel',
                select: 'type quantity price -_id' 
            })
            .populate({
                path: 'tools',
                select: 'type quantity price -_id' // Selecting only required fields and excluding _id
            })
            .select('eventName startDate startTime hoursNumber personnel tools -_id'); // Selecting only required fields and excluding _id
        
        if (!events || events.length === 0) {
            return res.status(404).json({ message: 'No events found for the user ID' });
        }

        // If events are found, return them
        res.json(events.map(event => ({
            eventName: event.eventName,
            startDate: event.startDate,
            startTime: event.startTime,
            hoursNumber: event.hoursNumber,
            personnel: event.personnel.map(person => ({
                type: person.type,
                quantity: person.quantity,
                price: person.price
            })),
            tools: event.tools.map(tool => ({
                type: tool.type,
                quantity: tool.quantity,
                price: tool.price
            }))
        })));
    } catch (error) {
        console.error('Error retrieving events by user ID:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
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

export { createEvent, eventServices, deleteEvent ,GetEventsByUserId};
