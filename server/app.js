// import dotenv
require('dotenv').config();

// import mongoose waiter model
const waiterModel = require('./models/waiter');

// import cors
const cors = require('cors');

// import node-mailer
const nodemailer = require('nodemailer');

// configure express
const express = require('express');
const app = express();

// import db-connector
const dbConnector = require('./db/connect-db');

// express middleware for handling json data in post-requests
app.use(express.json());

// use cors
app.use(cors());

// API home route
app.get('/api/v1/', (req, res) => {
  res.status(200).send('jobjo waitlist is live');
});

// waitlist route
app.post('/api/v1/join-waitlist', async (req, res) => {
  const { name, email } = req.body;
  
  const waiter = await waiterModel.create(req.body);

  const waiterName = name;
  const waiterEmail = email;
  const waiterFirstName = waiterName.split(' ')[0];

  const transporter = nodemailer.createTransport({
    host: process.env.ADMIN_EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: waiterEmail,
    subject: 'Jobjo - Thanks for joining our waitlist',
    html: `<p>Hello ${waiterFirstName}, <br/> we're so glad to have you on our waitlist. <br/><br/>
    Jobjo is an amazing platform that provides a base for tech talents to discover job opportunities - and for companies to find the best talents. <br/> 
    We are building something different - a job board, and a job-focused community to help redefine the way we think jobs in tech. <br/> We are currently in the process of 
    building our platform and we will keep you updated with our progress. <br/> <br/>

    Thanks for becoming a part of our story - we are very excited to have you on board. We hope to begin <br/> helping you discover amazing job opportunities as soon as possible. <br/> <br/>
    
    We'll greatly appreciate if you can share our platform with your friends and colleagues. We'll also be <br/> very glad if you do well to send us feedbacks as we begin rolling out releases. <br/> <br/>

    Thanks a lot. <br/><br/>

    Best regards, <br/>
    <strong>The Jobjo Team</strong>`,
  };

  transporter.sendMail(mailOptions, (err, success) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ requestStatus: 'failed: email not sent' });
    } else {
      res.status(201).json({ waiter, requestStatus: 'success' });
      console.log('email sent successfully');
    }
  });
});

// serve
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await dbConnector(process.env.MONGO_DB_CONNECTION_STRING);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
