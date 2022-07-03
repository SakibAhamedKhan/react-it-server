const express = require('express');
const cors = require('cors');
require('dotenv').config();


const port = process.env.PORT || 5000;
const app = express();


//Middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('React It server in Running');
});

app.listen(port,() => {
    console.log('Server is Running');
})


