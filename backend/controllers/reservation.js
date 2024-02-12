import reservation from '../models/reservation.js';


const createreservation = async (req, res) => {
  const { managerId, owner, floor, price, paid, cin } = req.body;


  try {
    const newreservation = new reservation({
      Manager_id: managerId,
      owner: owner,
      etage: floor,
      cin: cin,
      price: price || 0,
      paid: paid || false,
    });


    const savedreservation = await newreservation.save();

    const newPayment = new payment({

      userId: managerId,
      reservation: newreservation._id,
      Pay_Date: Date.now(),
      
    });

    const savedPayment = await newPayment.save();

    const result = {
      savedreservation: savedreservation,
      savedPayment: savedPayment
    };

    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating reservation:', error);
    res.status(500).json({ error: 'Could not create reservation' });
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


