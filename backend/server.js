const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");
app.use(cors());
// const http = require('http');
require('dotenv').config()

// app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use (bodyParser.json ({
	extended: true,
	limit: "50mb"
}));

// const server = http.createServer(app);
app.use('/api/user', require('./routes/user'));
app.use('/api/card', require('./routes/card'));

const port = process.env.PORT || 9000;
async function start() {
  try {
    const url = process.env.DB_URL;
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      console.log('Database is worked');
    } catch (e) {
      console.log('Database disconnect');
      process.exit(1);
    }

    app.listen(port, () => {
      console.log(`server started ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();