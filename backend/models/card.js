const { Schema, model } = require('mongoose');

const cardsSchema = new Schema({
  content: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  userId: {
    type: String,
    required: true,
  },
});

module.exports = model('cards', cardsSchema);
