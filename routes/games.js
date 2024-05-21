const gamesRouter = require('express').Router();
const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists, checkIsVoteRequest} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted} = require('../controllers/games');
const { checkAuth } = require('../middlewares/auth');

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.get("/games", findAllGames ,sendAllGames);
gamesRouter.post('/games', findAllGames, checkEmptyFields, checkAuth ,checkIsGameExists, createGame, sendGameCreated); 
gamesRouter.put("/games/:id", findGameById,checkIsVoteRequest,checkIfCategoriesAvaliable,checkIfUsersAreSafe, checkEmptyFields,checkAuth, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted)


module.exports = gamesRouter;