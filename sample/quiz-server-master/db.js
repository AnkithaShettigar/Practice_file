const mongoose = require('mongoose');

var mongoURL =
  'mongodb+srv://Ankitha:tysJCvt4mq3wgJNO@cluster0.zxuiba0.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

let connection = mongoose.connection;

connection.on('error', () => {
  console.log('mongoose connection failed');
});

connection.on('connected', () => {
  console.log('mongoose connection success');
});

module.exports = mongoose;
