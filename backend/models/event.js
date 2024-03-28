import mongoose from 'mongoose';



const eventSchema = new mongoose.Schema({
    eventName: String,
    startDate: Date,
    startTime: String,
    hoursNumber: Number,
    price: Number,
    userId:String,
    location: {
        name: String
    },
    personnel: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Personnel'
    }],
    tools: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tools'
    }],
});

const Event = mongoose.model('Event', eventSchema);

export default Event