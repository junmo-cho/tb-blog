const express = require('express');
const multer = require('multer');
const router = express.Router();
const fs = require('fs');
const { Post, Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');
const path = require('path');

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ],
      include: [{
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }]
      }, {
        model: User,
        attributes: ['id', 'nickname'],
      }],
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ message: `Server Error ${error}` });
    next(error);
  }
});

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      category: req.body.category,
      title: req.body.title,
      subTitle: req.body.subTitle,
      content: req.body.content,
      UserId: req.user.id,
      // user: req.body.user,
    });

    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Comment,
        // include: [{
        //   model: User,
        //   attributes: ['id', 'nickname'],
        // }]
      }, {
        model: User,
        // attributes: ['id', 'nickname'],
      }],
    });

    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: `Server Error ${error}` });
    next(error);
  }
});

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + new Date().getTime() + ext);
    }
  }),

  limits: { fileSize: 20 * 1024 * 1024 },
});

router.post('/images', isLoggedIn, upload.array('image'), async (req, res, next) => {
  console.log('전달받은 파일들', req.files);
  res.json(req.files.map((v) => {
    const IMG_URL = `http://localhost:8080/${v.filename}`;
    return ({ url: IMG_URL });
  }));
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {
  try {
    const comment = await Comment.create({
      content: req.body.content,
      UserId: req.user.id,
      PostId: parseInt(req.params.postId)
    });

    res.status(201).json(comment);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: `Server Error ${error}` });
    next(error);
  }
});

router.delete('/:postId', isLoggedIn, async (req, res, next) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
      },
    });

    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: `Server Error ${error}` });
    next(error);
  }
});

module.exports = router;
