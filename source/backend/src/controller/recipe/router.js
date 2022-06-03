const express = require('express');
const Recipe = require('../../model/recipe');
const controller = require('../base/controller')(Recipe);
const router = express.Router();

//GET
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next);
});

module.exports = router;