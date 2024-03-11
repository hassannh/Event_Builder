import mongoose from 'mongoose';



const resourceSchema = new mongoose.Schema({
    type: String,
    quantity: Number,
    price: Number,
    available: {
        type: Boolean,
        default: true
    }
});

const eventSchema = new mongoose.Schema({
    eventName: String,
    startDate: Date,
    startTime: Date,
    hoursNumber: Number,
    price: Number,
    location: {
        name: String
    },
    personnel: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Personnel'
    }],
    snacks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Snacks'
    }],
    tools: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tools'
    }],
    resources: [resourceSchema]
});

const Event = mongoose.model('Event', eventSchema);

export default Event