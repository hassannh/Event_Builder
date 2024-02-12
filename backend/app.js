import express from 'express';
import {connectDB} from './config/db.js'
import dotenv from 'dotenv';
import appRoute from './routes/index.js';
import cors from 'cors'

dotenv.config();


const app = express();

const port = process.env.PORT


connectDB();


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));


  app.use('/api', appRoute);



export default app