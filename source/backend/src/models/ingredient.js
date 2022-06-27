const mongoose = require('mongoose');

const IngredientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    allergenId: {
        type: String
    },
},{
    collection: 'Ingredient'
});

module.exports = mongoose.model('Ingredient', IngredientSchema);