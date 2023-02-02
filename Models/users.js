const { Schema, model } = require('mongoose');


const userSchema = new Schema(
  {
    username:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: 'enter your email here', 
        unique: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Course = model('user', userSchema);

module.exports = user;
