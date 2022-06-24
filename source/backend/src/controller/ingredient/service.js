const Ingredient = require('../../models/ingredient');

exports.create = ingredientData => {
    const ingredientData = new Ingredient(ingredientData);
    return ingredientData.save();
};

exports.findAll = () => Ingredient.find().populate();

exports.findOne = id => Ingredient.findById(id).populate();

exports.update = (id, updateData) => Ingredient.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Ingredient.findByIdAndRemove(id);
