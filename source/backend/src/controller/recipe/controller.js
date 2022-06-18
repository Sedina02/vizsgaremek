const Recipe = require('../../model/recipe');

const RecipeService = require('../recipe/service');

exports.findAll = (req, res, next) => {
    return RecipeService.findAll()
        .then( recipe => {
            res.json(recipe);
        });
};
