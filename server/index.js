import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db/connection.js';


import dbWebhook from './routes/webhook.js'

dotenv.config();
const app = express()
app.use(express.json());

//CORS configuration
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

//Routes
app.use("/api", dbWebhook)


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});


// Database connection handling
db.on('error', (error) => {
  console.error("Database connection error:", error);
});

db.once('connected', () => {
  console.log('Database connected');
});