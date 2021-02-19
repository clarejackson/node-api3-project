const express = require('express');

const router = express.Router();

const posts = require("./posts-model")

const { validatePost } = require("../middleware/middleware")

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  posts.get()
  .then((posts) => {
    res.status(200).json(posts)
  })
  .catch(next)
});

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  posts.getById(req.params.id)
  .then((posts) => {
    res.status(200).json(posts)
    next()
  })
  .catch(next)
});

// do not forget to export the router
module.exports = router
