
import Reservation from '../models/reservation';
import Event from '../models/event';
import Services from '../models/services';
import Personnel from '../models/personnel';
import Tools from '../models/tools';
import mongoose from 'mongoose';

const createreservation = async (req, res) => {
  try {
    // Extract relevant data from the request
    const { price, details, userId, eventData, servicesData } = req.body;

    // Check if userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid userId' });
    }

    

    // Create reservation
    const reservation = await Reservation.create({
      price,
      details,
      userId: mongoose.Types.ObjectId(userId),  // Convert userId to ObjectId
      eventId: event._id,
      servicesId: services._id,
    });

    res.status(201).json({ reservation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};






const getAll = async (req, res) => {
  try {
    const reservations = await reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(404).json({ error: 'Could not fetch reservations' });
  }
};



const updatereservation = async (req, res) => {
  const { id } = req.params;
  const { owner, floor, price, paid } = req.body;

  try {
    const updatedreservation = await reservation.findByIdAndUpdate(
      id,
      {
        owner: owner,
        etage: floor,
        price: price || 0,
        paid: paid || false,
      },
      { new: true }
    );

    if (!updatedreservation) {
      return res.status(404).json({ error: 'reservation not found' });
    }

    res.status(200).json(updatedreservation);
  } catch (error) {
    res.status(500).json({ error: 'Could not update reservation' });
  }
};



const searchByOwnerName = async (req, res) => {
  const { ownerName } = req.query;

  try {
    const reservations = await reservation.find({ owner: { $regex: new RegExp(ownerName, 'i') } });

    if (reservations.length === 0) {
      return res.status(404).json({ error: 'No reservations found for this owner name' });
    }

    res.status(200).json(reservations);
  } catch (error) {
    console.error('Error searching reservations by owner name:', error);
    res.status(500).json({ error: 'Could not perform owner name search' });
  }
};



const getPaidApartments = async (req, res) => {
 
};





const deletereservation = async (req, res) => {
  const reservationId = req.params.reservationId;

  try {

    const foundreservation = await reservation.findById(reservationId);

    if (!foundreservation) {
      return res.status(404).json({ error: 'reservation not found' });
    }
    const deletedreservation = await foundreservation.deleteOne();

    res.status(200).json({ message: 'reservation deleted successfully', deletedreservation });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete apartment' });
  }
};














export { createreservation, getAll,updatereservation, searchByOwnerName, deletereservation }


