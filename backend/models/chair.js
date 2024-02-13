import mongoose from 'mongoose';

const chairSchema = new mongoose.Schema({
    
    price: { type: Number },
    picture:{type: String},
    description:{type: String},
    quentity:{type: Number},
   
});

const Chair = mongoose.model('Chair', chairSchema);

export default Chair