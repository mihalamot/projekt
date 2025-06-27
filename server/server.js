require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const algorithmRoutes = require('./routes/algorithmRouter.js');

const app = express();

app.use(express.json()); //makes   req.body         (next() built in)

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();   //next to move to the next middleware or route handler
});

app.use('/api/algorithms/', algorithmRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
    console.log(`Connected to db, server is running on http://localhost:${process.env.PORT}`);
});
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


