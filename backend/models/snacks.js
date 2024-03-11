import mongoose from 'mongoose';


const typeEnumValues = ['water', 'soda', 'cack'];

const snacksSchema = new mongoose.Schema({
    
    Type: {
        type: String,
        enum: typeEnumValues,
        required: true 
    },
   
});

const Snacks = mongoose.model('Snacks', snacksSchema);

export default Snacks