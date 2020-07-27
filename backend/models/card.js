const { Schema, model } = require('mongoose');
const ObjectId = Schema.Types.ObjectId
const cardsSchema = new Schema({
  content: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  userId: {
    type: ObjectId,
    required: true,
  },
});

module.exports = model('cards', cardsSchema);
