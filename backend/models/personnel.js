import mongoose from 'mongoose';


const typeEnumValues = ['security', 'chef', 'cleaner'];
const personnelSchema = new mongoose.Schema({
    
    Type: {
        type: String,
        enum: typeEnumValues,
        required: true 
    },
   
});

const Personnel = mongoose.model('Personnel', personnelSchema);

export default Personnel