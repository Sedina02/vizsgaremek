const User = require('../../models/user');

exports.create = userData => {
    const user = new User(userData);
    return user.save();
};

exports.findAll = () => User.find();

exports.findOne = id => User.findById(id).populate();

exports.update = (id, updateData) => User.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => User.findByIdAndRemove(id);
