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
app.use(express.urlencoded())

app.use(cors());


  app.use('/api', appRoute);



export default app