const express = require('express');
const router = express.Router();

const {
	ItemsController,
	CategoriesController
} = require('../controllers');

router.get('/items', ItemsController.get);
router.get('/categories', CategoriesController.get);

module.exports = router;
