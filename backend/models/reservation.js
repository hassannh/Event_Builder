import { Schema, model } from 'mongoose';

const reservationSchema = new Schema({
    
    price: { type: Number, default: 0 },
    paid: { type: Boolean ,default: false },
   
});

const reservation = model('reservation', reservationSchema);

export default reservation