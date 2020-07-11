const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name, email, password: hashPassword,
    });
    await user.save();
    res.send({ message: 'Signup is successful' }).status(200);
  } catch (e) {
    res.send(e);
  }
};

exports.login = async (req, res) => {
  try {
    const { name, password } = req.body;
    const date = await User.findOne({ name });
    if (!date) return  res.status(500)
      const passwordComparison = await bcrypt.compare(password, date.password);
      if (!passwordComparison) return res.json({ token })
        await jwt.sign({ name }, process.env.SECRETKEY, (err, token) => {
          res.json({ token });
        });
  } catch (e) {
    res.send(e);
  }
};
