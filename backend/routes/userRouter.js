const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    });

    if(exUser) {
      return res.status(403).send('이미 등록이 된 이메일입니다.');
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 11);
    const user = await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });

    res.status(200).send(user);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: `Server Error ${error}` });
    next(error);
  }
});

module.exports = router;
