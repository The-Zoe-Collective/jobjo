const mongoose = require('mongoose');

const waiterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide company name'],
      //   maxlength: 50,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ,
        'Please provide a valid email address',
      ],
        // unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('waiter', waiterSchema);
