const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        index: {
            unique: true,
        }
    },
    lastName: {
        type: String,
    },
    firstName:{
        type: String,
    }
},{
    collection: 'User'
});

UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('User', UserSchema);