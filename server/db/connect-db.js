const mongoose = require('mongoose');

const connectDB = (URI) => {
  mongoose.set('strictQuery', false);
  return mongoose.connect(URI);
};

module.exports = connectDB;
