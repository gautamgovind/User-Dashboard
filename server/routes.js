const express =  require('express');
const router = new express.Router();
const handlers = require('./handler');

router.get('/getuserinfo', handlers.getUserInfo);
router.get('/searchuser', handlers.searchUser);

module.exports = router;


  