const mongoose = require('mongoose');

const RecipeTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('RecipeType', RecipeTypeSchema);