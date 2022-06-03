const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema);