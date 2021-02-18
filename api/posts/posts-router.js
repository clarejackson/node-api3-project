const express = require('express');

const router = express.Router();

const posts = require("./posts-model")

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  posts.get()
  .then((posts) => {
    res.status(200).json(posts)
  })
  .catch((error) => {
    next(error)
  })
});

router.get('/:id', (req, res) => {
  // DO YOUR MAGIC
});

// do not forget to export the router
module.exports = router
