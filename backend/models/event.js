import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({

    eventName: { type: String },
    startDate: { type: Date },
    startTime: { type: Date },
    hoursNumber: { type: Number },
    snacksType: { type: String },
    resourcesAvailable: { type: Boolean },
    price: { type: Number },
    location: {
        name: { type: String }
    }

});

const Event = mongoose.model('Event', eventSchema);

export default Event