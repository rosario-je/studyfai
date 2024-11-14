import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Webhook } from 'svix';
import bodyParser from 'body-parser'

dotenv.config();

const app = express()

app.use(express.json);
app.use(cors());


const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
