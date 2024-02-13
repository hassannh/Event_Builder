import mongoose from 'mongoose';

const drinkSchema = new mongoose.Schema({
    
    price: { type: Number },
    picture:{type: String},
    description:{type: String},
    quentity:{type: Number},
});

const Drink = mongoose.model('Drink', drinkSchema);

export default Drink