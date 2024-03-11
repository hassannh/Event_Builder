import mongoose from 'mongoose';


const personnelSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['security', 'chef', 'cleaner'],
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: Number,
    available: {
        type: Boolean,
        default: true
    }
});

const Personnel = mongoose.model('Personnel', personnelSchema);

export default Personnel