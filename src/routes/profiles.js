// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const profilesController = require('../controllers/profilesController')

router.get('/', profilesController.login); 
// router.get('/search', mainController.search); 
// router.get('/login', mainController.login);

module.exports = router;