const usersRouter = require('express').Router();
const { findAllUsers, createUser } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated } = require('../controllers/users');

usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
usersRouter.get('/users', findAllUsers, sendAllUsers);

module.exports = usersRouter;