import mongoose from 'mongoose';

const snacksSchema = new mongoose.Schema({
    
    price: { type: Number },
    picture:{type: String},
    description:{type: String},
    quentity:{type: Number},
   
});

const Snacks = mongoose.model('Snacks', snacksSchema);

export default Snacks