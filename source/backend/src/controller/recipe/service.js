const Recipe = require('../../models/recipe');

exports.create = recipeData => {
    const recipe = new Recipe(recipeData);
    return recipe.save();
};

exports.findAll = () => Recipe.find().populate();

exports.findOne = id => Recipe.findById(id).populate('ingredient').populate('typeId');

exports.update = (id, updateData) => Recipe.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Recipe.findByIdAndRemove(id);
