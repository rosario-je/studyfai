import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Webhook } from 'svix';
import bodyParser from 'body-parser';
import User from './db/models/userModel.js'
import db from './db/connection.js'
import userRoutes from './routes/webhook.js'

dotenv.config();

const app = express();

app.use(cors());

//Routes for user webhooks
app.use("/api", userRoutes);

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