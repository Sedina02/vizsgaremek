const express = require('express');
const RecipeType = require('../../model/recipeType');
const controller = require('../base/controller')(RecipeType);
const router = express.Router();

//GET
router.get('/soup', (req, res, next) => {
    return controller.findAll(req, res, next);
});

module.exports = router;