const categoriesRouter = require('express').Router();
const {findAllCategories} = require('../middlewares/categories');
const {sendAllCategories} = require('../controllers/categories');
const {createCategory} = require('../middlewares/categories');
const {sendCategoryCreated} = require('../controllers/categories');

categoriesRouter.post("/categories", findAllCategories, createCategory, sendCategoryCreated);

module.exports = categoriesRouter;