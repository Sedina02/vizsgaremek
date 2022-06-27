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
},{
    collection: 'Ingredient'
});

module.exports = mongoose.model('Ingredient', IngredientSchema);