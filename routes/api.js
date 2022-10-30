var express = require('express');
var router = express.Router();

const schedulesHandler = require('./handlers/');

/* GET users listing. */
router.get('/schedules', schedulesHandler.getAllSchedules);
module.exports = router;
