const users = require("../users/users-model")
const post = require("../posts/posts-model")

function logger() {
  // DO YOUR MAGIC
  return (req, res, next) => {
    const time = new Date().toISOString()
    console.log(`[${time}] ${req.method} ${req.url}`)
    next() 
  }  
  }


function validateUserId() {
  // DO YOUR MAGIC
  return (req, res, next) => {
    users.getById(req.params.id)
    .then((user) => {
      if (user) {
        req.user = user
        next()
      } else {
        res.status(404).json({
          message: "User not found",
        })
      }
    })
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to export these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}