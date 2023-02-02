const { Schema, model } = require('mongoose');


const thoughtsSchema = new Schema(
  {
    thoughtTitle: {
      type: String,
      required: true,
    },
    username:{
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
            required: 'Enter Your Thought here',
            minlength: 0,
            maxlength: 280
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Course = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
