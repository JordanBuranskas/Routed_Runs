const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// sets a schema for the 'species' collection
const newActivity = new Schema({
    Date: String,
    Description: String,
    Times: String,
// homeworld_id: {
//   // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
//   type: Schema.Types.ObjectId,
//   ref: 'planet'
// }
});

const Activity = mongoose.model('activity', newActivity);

module.exports = Activity;
  

