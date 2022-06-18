const mongoose = require('mongoose');

const IngredientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    allergenId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Allergen'
    },
});

module.exports = mongoose.model('Ingredient', IngredientSchema);