const mongoose = require('mongoose');

const IngredientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    allergen: {
        type: Map,
        of: new Schema({
          ingredient: {
            type: ObjectId,
            ref: 'Allergen'
          },
        }),
    },
});

module.exports = mongoose.model('Ingredient', IngredientSchema);