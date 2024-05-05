const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories')
const gamesRouter = require('./routes/games');
const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const PORT = 3000;


const app = express();
connectToDatabase()

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    usersRouter,
    categoriesRouter,
    gamesRouter,
);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
