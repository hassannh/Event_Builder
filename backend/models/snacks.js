import mongoose from 'mongoose';


const snacksSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['water', 'soda', 'cack'],
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

const Snacks = mongoose.model('Snacks', snacksSchema);

export default Snacks