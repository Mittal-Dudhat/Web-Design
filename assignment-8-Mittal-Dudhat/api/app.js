import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

mongoose.connect('mongodb://localhost:27017/tododb');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

routes(app);

export default app;