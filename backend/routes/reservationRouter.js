import { Router } from "express";
import {createreservation , getAll ,updatereservation,markreservationAsPaid , getPaidreservations ,deletereservation} from "../controllers/reservation.js";
import verifyToken from "../middlewares/verifyTokenMiddleware.js";




const router = Router();




router.post('/create', createreservation);

router.get('/getAll',verifyToken, getAll);


router.put('/update/:id', updatereservation);


router.delete('/Drop/:reservationId',verifyToken,deletereservation)







export default router;