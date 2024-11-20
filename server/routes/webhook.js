import express from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { Webhook } from 'svix';
import User from "../db/models/userModel.js"


dotenv.config();


const router = express.Router();

router.post('/webhook', bodyParser.raw({ type: 'application/json' }), async function (req, res) {
    try {
      const payload = req.body.toString();
      const headers = req.headers;

      const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);
      const evt = wh.verify(payload, headers);
      const { id, ...attributes } = evt.data;
      console.log('event: ', evt)
      // Handle the webhooks
      const eventType = evt.type;
      if (eventType === 'user.created') {
        console.log(`User ${id} was ${eventType}`);

        const firstName = attributes.first_name;
        const lastName = attributes.last_name;
        const username = attributes.username;
        const email = attributes.email_addresses[0].email_address;

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
      else if (eventType === 'user.deleted') {
        const user = await User.findOneAndDelete({ clerkUserId: id });
        if (user) {
          console.log(`User with the id of ${id} and name ${user.firstName} ${user.lastName} has been deleted from the database`);
        } else {
          console.log(`User with the id of ${id} has been deleted from the database`);
        }
      }
      res.status(200).json({
        success: true,
        message: 'Webhook received',
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message
      });
    }
  }
);


export default router;