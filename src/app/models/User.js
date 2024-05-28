const { Schema, model, models } = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, 
    validate: pass => {
        if(!pass?.length || pass.length < 5) {
            new Error('password must be atleast 5 characters');
            return false;
        }
    },
},
});

UserSchema.post('validate', function(seller) {
    const saltRounds = 10;
    const unHashedPassword = seller.password;
    const salt = bcrypt.genSaltSync(saltRounds);
    seller.password = bcrypt.hashSync(unHashedPassword, salt);
})

export const User = models?.User || model('User', UserSchema);

