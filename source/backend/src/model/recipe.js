const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    type: {
        type: Map,
        of: new Schema({
          type: {
            type: ObjectId,
            ref: 'RecipeType'
          },
          amount: Number,
        }),
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
    ingredients: {
        type: Map,
        of: new Schema({
          ingredient: {
            type: ObjectId,
            ref: 'Ingredient'
          },
          amount: Number,
        }),
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema);