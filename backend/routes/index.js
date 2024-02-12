import { Router } from "express";
import userRouter from './userRouter.js'
import reservationRouter from './reservationRouter.js'
import errorHandler from '../middlewares/errorMiddleware.js'
const router = Router();



router.use('/user' ,userRouter);

router.use('/reservation' ,reservationRouter);

export default router;
