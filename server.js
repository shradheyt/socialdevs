const express = require('express');
const mongoose = require('mongoose');
const app = express();

//DB Config
const db = require('./config/keys.js').mongoURI;

//COnnect to mongo db
mongoose.connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));