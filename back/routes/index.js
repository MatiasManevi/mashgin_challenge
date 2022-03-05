const express = require('express');
const {
	ItemsController,
	CategoriesController,
	OrdersController
} = require('../controllers');
const router = express.Router();

router.get('/items', ItemsController.get);
router.get('/categories', CategoriesController.get);
router.post('/orders', OrdersController.post);

module.exports = router;
