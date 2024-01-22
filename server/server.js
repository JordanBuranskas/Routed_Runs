const express = require('express');
const app = express();
const path = require('path');
// const PORT = 3000;
const mongoose = require('mongoose');
const distanceController = require('./controllers/distanceController.js')
const MONGO_URI = 'mongodb+srv://jburanskas1:frisbeee@cluster0.zbnwvo8.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'Runner'
})

mongoose.connection.once("open", () => {
  console.log("MONGOOSE CHECK")

})


// .then(() => console.log('Connected to Mongo DB.'))
// .catch(err => console.log(err));


app.use(express.json());

app.get('/,', (req, res) => {
  res.status(200).send.json(res.locals.activities)

})


app.post('/distance', distanceController.saveDistance, (req, res) => {
  console.log("THIS POSTED")
  // console.log(req.body)
    res.status(200).json(res.locals.activitySave)
  })
 


app.listen(3000, () => {
  console.log("port open")
})

  module.exports = app
  