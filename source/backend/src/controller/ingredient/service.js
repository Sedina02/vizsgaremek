const Ingredient = require('../../models/ingredient');

exports.create = ingredientData => {
    const ingredientsData = new Ingredient(ingredientData);
    return ingredientsData.save();
};

exports.findAll = () => Ingredient.find().populate(['allergenId']);

exports.findOne = id => Ingredient.findById(id).populate(['allergenId']);

exports.update = (id, updateData) => Ingredient.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Ingredient.findByIdAndRemove(id);
