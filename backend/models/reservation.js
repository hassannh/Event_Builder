import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    price: { type: Number, default: 0 },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    details: Array,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  });
  
  const Reservation = mongoose.model('Reservation', reservationSchema);
  
  module.exports = Reservation;