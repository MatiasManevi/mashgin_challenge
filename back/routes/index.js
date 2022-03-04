const express = require('express');
const { ItemsController } = require('../controllers');
const router = express.Router();

router.get('/items', ItemsController.get);

module.exports = router;
