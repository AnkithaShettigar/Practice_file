const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cpassword: req.body.cpassword,
  });
  try {
    const user = await newUser.save();
    res.send('user registered');
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email: email,
      password: password,
    });
    if (user) {
      const temp = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      };
      res.send(temp);
    } else {
      return res.status(400).json({ message: 'Login failed' });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
