import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

//Webhook imports
import { Webhook } from 'svix';

//Models
import db from './db/connection.js'

//Routes
import userRoutes from './routes/webhook.js'

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

//Routes
app.use("/api", userRoutes);
app.use("/api/gpt", gptAPIRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});

// Database connection handling
db.on('error', (error) => {
  console.error("Database connection error:", error);
});

db.once('connected', () => {
  console.log('Database connected');
});