const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');
const router = express.Router();

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) {
      console.error(err);
      return next(err);
    }

    if(info) {
      return res.status(401).send(info.reason);
    }

    return req.login(user, async (loginErr) => {
      if(loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      return res.json(user);
    });
  }) (req, res, next)
});

router.post('/', async (req, res, next) => {
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

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
