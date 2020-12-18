const express = require('express');

const router = express.Router();

const pageNotFoundController = require('../controllers/error');

router.get(pageNotFoundController.get404);

module.exports = router;