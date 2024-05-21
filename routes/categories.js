const categoriesRouter = require('express').Router();
const {findAllCategories, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName} = require('../middlewares/categories');
const {sendAllCategories, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');
const {createCategory} = require('../middlewares/categories');
const {sendCategoryCreated} = require('../controllers/categories');
const { checkAuth } = require('../middlewares/auth');

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post("/categories",findAllCategories,checkIsCategoryExists,checkEmptyName, checkAuth ,createCategory,sendCategoryCreated);
categoriesRouter.put("/categories/:id",checkEmptyName,checkAuth,updateCategory,sendCategoryUpdated);
categoriesRouter.delete("/categories/:id",checkAuth,deleteCategory,sendCategoryDeleted); 

module.exports = categoriesRouter;