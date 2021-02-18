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

function validateUser() {
  // DO YOUR MAGIC
  return (req, res, next) => {
    if (!req.body) {
      return res.status(400).json({
        message: "Missing user data"
      })
    } 
    if (!req.body.name) {
      return res.status(400).json({
        message: "Missing required name field"
      })
    }
    next()
  }
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