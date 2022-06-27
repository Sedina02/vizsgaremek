const RecipeType = require('../../models/recipeType');

exports.create = recipeTypeData => {
    const recipeType = new RecipeType(recipeTypeData);
    return recipeType.save();
};

exports.findAll = () => RecipeType.find();

exports.findOne = id => RecipeType.findById(id);

exports.update = (id, updateData) => RecipeType.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => RecipeType.findByIdAndRemove(id);
