const {Schema, model, models} = require("mongoose");

const RatingSchema = new Schema({
    rating: { type: Number, required: true, min:1, max:5},
    comment: { type: String},
    date: { type: Date, default: Date.now}
})