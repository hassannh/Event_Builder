import { Router } from "express";
import userRouter from './userRouter.js'
import reservationRouter from './reservationRouter.js'
import eventRouter from './eventRouter.js'
import errorHandler from '../middlewares/errorMiddleware.js'
const router = Router();



router.use('/user' ,userRouter);

router.use('/reservation' ,reservationRouter);

router.use('/event' ,eventRouter);

export default router;
