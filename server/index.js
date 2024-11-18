import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Webhook } from 'svix';
import bodyParser from 'body-parser';
import User from './db/models/userModel.js'
import db from './db/connection.js'

dotenv.config();

const app = express();

app.use(cors());

// Real code
app.post(
  '/api/webhook',
  bodyParser.raw({ type: 'application/json' }),
  async function (req, res) {
    try {
      const payloadString = req.body.toString();
      const svixHeaders = req.headers;

      const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);
      const evt = wh.verify(payloadString, svixHeaders);
      const { id, ...attributes } = evt.data;
      console.log('event: ', evt)
      // Handle the webhooks
      const eventType = evt.type;
      if (eventType === 'user.created') {
        console.log(`User ${id} was ${eventType}`);

        const firstName = attributes.first_name;
        const lastName = attributes.last_name;
        const username = attributes.username
        const email = attributes.email_addresses[0].email_address

        const user = new User({
          clerkUserId: id,
          firstName: firstName,
          lastName: lastName,
          username: username,
          email: email
        });

        await user.save();
        console.log('User saved to database');
      }
      res.status(200).json({
        success: true,
        message: 'Webhook received',
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
);


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