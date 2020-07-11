const { Schema, model } = require('mongoose');

const cardsSchema = new Schema({
  content: {
    type: String,
    required: true,
  },

  data: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
});

module.exports = model('cards', cardsSchema);
