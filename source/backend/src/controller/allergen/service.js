const Allergen = require('../../models/allergen');

exports.create = allergenData => {
    const allergenData = new Allergen(allergenData);
    return allergenData.save();
};

exports.findAll = () => Allergen.find().populate();

exports.findOne = id => Allergen.findById(id).populate();

exports.update = (id, updateData) => Allergen.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Allergen.findByIdAndRemove(id);
