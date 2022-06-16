const express = require('express');
const User = require('../../model/user');
const controller = require('../base/controller')(User);
const router = express.Router();

//GET
router.get('/soup', (req, res, next) => {
    return controller.findAll(req, res, next);
});

module.exports = router;