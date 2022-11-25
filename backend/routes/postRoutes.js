const express = require('express');
const router = express.Router();
const { Post, Comment } = require('../models');

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
      }],
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ message: `Server Error ${error}` });
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const post = await Post.create({
      category: req.body.category,
      title: req.body.title,
      subTitle: req.body.subTitle,
      content: req.body.content,
      user: req.body.user,
    });

    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Comment,
      }],
    });

    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: `Server Error ${error}` });
    next(error);
  }
});

router.post('/:postId/comment', async (req, res, next) => {
  try {
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId)
    });

    res.status(201).json(comment);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: `Server Error ${error}` });
    next(error);
  }
});

router.delete('/:postId', async (req, res, next) => {
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
