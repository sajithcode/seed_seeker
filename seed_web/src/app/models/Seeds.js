import mongoose, { Schema, model, models } from "mongoose";

const SeedSchema = new Schema({
    seedType: {
        type: String,
        required: true
    },

    amount: {
        type: String,
        required: true
    },

    contactDetails: {
        type: Number,
        required: true
    },

    location: {
        type: String,
        required: true
    }
});

export const Seed = models?.Seed ||  model('Seed', SeedSchema);
