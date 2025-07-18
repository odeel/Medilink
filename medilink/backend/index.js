const express = require('express');         // Imports Express framework
const dotenv = require('dotenv').config();  // Loads environment variables from a .env file
const cors = require('cors');               // Enables CORS for cross-origin requests
const mongoose = require ('mongoose');
const app = express();                      // Initializes the Express application

mongoose.connect(process.env.MONGO_URL)
.then (()=> console.log('database connected'))
app.use(cors()); // Allows CORS
app.use(express.json()); // Parses incoming JSON requests

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
