const mongoose = require('mongoose');

const RecipeTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
}, {
    collection: 'RecipeType'
});

module.exports = mongoose.model('RecipeType', RecipeTypeSchema);