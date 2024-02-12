import { Router } from "express";
import {register,login} from '../controllers/auth.js'
import verifyToken from '../middlewares/verifyTokenMiddleware.js'


const router = Router();



router.post('/register', register);


router.post('/login', login);




export default router;