const Recipe = require("../../model/recipe");


exports.findAll = () => Recipe.find().populate('recipeType');