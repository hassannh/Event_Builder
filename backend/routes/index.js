import { Router } from "express";
import userRouter from './userRouter.js'
import eventRouter from './eventRouter.js'
import resourses from './resources.js'
import errorHandler from '../middlewares/errorMiddleware.js'


const router = Router();



router.use('/user' ,userRouter);


router.use('/event' ,eventRouter);


router.use('/resources',resourses)

export default router;
