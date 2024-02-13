import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    
    eventName: { type: String },
    eventDate:{type: Date},
    eventLocation:{type: String},
    visitors: { type: Number  },
    servicId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Services' }
   
});

const Event = mongoose.model('Event', eventSchema);

export default Event