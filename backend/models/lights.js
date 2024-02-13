import mongoose from 'mongoose';

const lightsSchema = new mongoose.Schema({
    
    price: { type: Number },
    picture:{type: String},
    description:{type: String},
    quentity:{type: Number},
   
});

const lights = mongoose.model('lights', lightsSchema);

export default lights