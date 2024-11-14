import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Webhook } from 'svix';
import bodyParser from 'body-parser'

dotenv.config();

const app = express()

app.use(express.json);
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server connected to port ${PORT}`);
});


// Database connection handling
db.on('error', (error) => {
  console.error("Database connection error:", error);
});

db.once('connected', () => {
  console.log('Database connected');
});