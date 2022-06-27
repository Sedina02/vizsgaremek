const Recipe = require('../../models/recipe');

exports.create = recipeData => {
    const recipe = new Recipe(recipeData);
    return recipe.save();
};

exports.findAll = (type) => Recipe.find({"typeId": type});

exports.findOne = id => Recipe.findById(id);

exports.update = (id, updateData) => Recipe.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Recipe.findByIdAndRemove(id);
