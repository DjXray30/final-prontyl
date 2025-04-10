const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
   
};
app.use(cors(corsOptions));
app.get('/api', (req, res) => {
    res.json({fruits:["apple", "banana", "orange"]});
    });
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });