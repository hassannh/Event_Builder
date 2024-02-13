import mongoose from 'mongoose';

const personnelSchema = new mongoose.Schema({
    
    clearnersNumber: { type: String },
    securityNumber:{type: String},
    serverNumber:{type: String},
   
});

const Personnel = mongoose.model('Personnel', personnelSchema);

export default Personnel