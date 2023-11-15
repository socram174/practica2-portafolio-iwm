import express from 'express';
import mongoose from 'mongoose';
import { User } from './User.js';

const PORT = 3000;
const app = express();

app.get('/api/profile',async (req, res) => {

    const users = await User.find();

    res.status(200).send(users);
});


mongoose.connect('mongodb+srv://marcos:marcos@cluster0.7ynbwt5.mongodb.net/Portafolio?retryWrites=true&w=majority').then(()=>{
    app.listen(PORT, () => {
        console.log(`App port ${PORT}`)
      })
});