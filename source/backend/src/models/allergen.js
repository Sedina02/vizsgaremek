const mongoose = require('mongoose');

const AllergenSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
},{
    collection: 'Allergen'
});

module.exports = mongoose.model('Allergen', AllergenSchema);