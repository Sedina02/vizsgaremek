const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    typeId: {
        type: mongoose.Schema.Types.ObjectId,
          ref: 'RecipeType',
          amount: Number,
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
        type: Number,
        required: true,
    },
    ingredients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
        amount: Number,
    }]
},{
    collection: 'Recipe'
});

module.exports = mongoose.model('Recipe', RecipeSchema);