import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    
    snacksId: { type: mongoose.Schema.Types.ObjectId, ref: 'Snacks' },
    drinkId:{type: mongoose.Schema.Types.ObjectId, ref: 'Drink' },
    
   
});

const Food = mongoose.model('Food', foodSchema);

export default Food