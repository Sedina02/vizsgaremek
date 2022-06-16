const express = require('express');
const Ingredient = require('../../model/ingredient');
const controller = require('../base/controller')(Ingredient);
const router = express.Router();

//GET
router.get('/soup', (req, res, next) => {
    return controller.findAll(req, res, next);
});

module.exports = router;