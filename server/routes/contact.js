import express from 'express';
import nodemailer from 'nodemailer';
import Message from '../models/message.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await Message.create({ name, email, message });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Failed to save message' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.SMTP_EMAIL,
    subject: `Contact Form Message from ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent and saved!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Message saved, but email failed.' });
  }
});

export default router;
