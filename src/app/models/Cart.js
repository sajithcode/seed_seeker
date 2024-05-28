const {mongoose, Schema, model ,models} = require('mongoose');

const CartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            seed: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Seed',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
            }
        }
    ]
}, {timestamps: true});

export const Cart = models.Cart || model('Cart', CartSchema);