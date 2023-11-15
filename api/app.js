import express from 'express';
import mongoose from 'mongoose';

const PORT = 3000;
const app = express();

app.get('/api/profile',(req, res) => {
    res.status(200).send({"success":true});
});


//mongoose.connect('mongodb+srv://marcos:marcos@cluster0.7ynbwt5.mongodb.net/Portafolio?retryWrites=true&w=majority');

// app.listen(PORT,()=>{
//     console.log(`Listening on port ${PORT}`);
// });

mongoose.connect('mongodb+srv://marcos:marcos@cluster0.7ynbwt5.mongodb.net/Portafolio?retryWrites=true&w=majority').then(()=>{
    app.listen(PORT, () => {
        console.log(`App port ${PORT}`)
      })
});