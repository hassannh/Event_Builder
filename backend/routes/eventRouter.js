import { Router } from "express";
import {createEvent ,GetEventsByUserId} from "../controllers/event"






const router = Router();




router.post('/create', createEvent);


router.get('/getById/:userId', GetEventsByUserId);







export default router;