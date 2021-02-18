const express = require('express');

const { logger } = require("./middleware/middleware")
const usersRouter = require("./users/users-router")
const postsRouter = require("./posts/posts-router")
const server = express();

// remember express by default cannot parse JSON in request bodies
server.use(express.json());
server.use(logger())

server.use("/users", usersRouter)
server.use("/posts", postsRouter)

// global middlewares and routes need to be connected here

server.get('/', (req, res) => {
  res.status(200).json({api: "up"});
});
// server.use((err, req, res, next) => {
//   console.log(err)

//   res.status(500).json({
//     message: "Something went wrong, please try again"
//   })
// })

module.exports = server;
