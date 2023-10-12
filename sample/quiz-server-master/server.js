const express = require('express');
const app = express();
const cors = require('cors');
const userRoute = require('./routes/User');
require('./db');

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoute);
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => {
  console.log('started');
});
