import mongoose from 'mongoose';


const toolsSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['chair', 'table', 'camera'],
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

const Tools = mongoose.model('Tools', toolsSchema);

export default Tools