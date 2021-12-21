import express from 'express';
import dotenv from 'dotenv';
import { mongoDBConnection } from './config/db.js';
import {UserRoute} from "./routes/userRoute.js"


mongoDBConnection();
dotenv.config();

const app = express();
app.use(express.json());
app.use('/users',UserRoute);
const PORT = process.env.PORT || 3000

app.listen(PORT)