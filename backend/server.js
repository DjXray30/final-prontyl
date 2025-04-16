const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');

const app = express();


app.use(express.json()); 
const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
};
app.use(cors(corsOptions));


const mongoURI = 'mongodb://127.0.0.1:27017/yourDatabaseName'; // Replace 'yourDatabaseName' with your database name
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));


app.get('/api', (req, res) => {
    res.json({ fruits: ["apple", "banana", "orange"] });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});