const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    typeId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    ingredients: [{
        type: String,
        required: true,
    }]
},{
    collection: 'Recipe'
});

module.exports = mongoose.model('Recipe', RecipeSchema);