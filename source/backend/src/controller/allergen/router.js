const express = require('express');
const Allergen = require('../../model/allergen');
const controller = require('../base/controller')(Allergen);
const router = express.Router();

//GET
router.get('/soup', (req, res, next) => {
    return controller.findAll(req, res, next);
});

module.exports = router;