// import express from "express";
// import dotenv from 'dotenv';
// import bodyParser from 'body-parser';
// import { Webhook } from 'svix';

// import userModel from '../db/models/userModel.js'

// dotenv.config();


// const router = express.Router()

// router.post('/signup',
//   bodyParser.raw({ type: 'application/json' }),

//   async function (req, res) {
//     //Create new Svix instance with secret key
//     const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);

//     try {
//       const payloadString = req.body.toString();
//       const svixHeaders = req.headers;

//       const evt = wh.verify(payloadString, svixHeaders);
//       const { id, ...attributes } = evt.data;
//       console.log('evt.data: ', evt.data)
//       // Handle the webhooks
//       const eventType = evt.type;
//       console.log('event type: '.eventType)
//       if (eventType === 'user.created') {
//         console.log(`User ${id} was ${eventType}`);

//         const firstName = attributes.first_name;
//         const lastName = attributes.last_name;
//         const username = attributes.username;
//         const email = attributes.email;

//         const newUser = new userModel({
//           clerkUserId: id,
//           firstName,
//           lastName,
//           username,
//           email,
//         });

//         const result = await newUser.save();
//         console.log('User saved to database', result);
//       }
//       res.status(200).json({
//         success: true,
//         message: 'Webhook received',
//       });
//     } catch (err) {
//       res.status(400).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   }
// );




// export default router;