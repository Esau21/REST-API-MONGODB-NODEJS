const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            min: 8,
            max: 12,
        },
        email: {
            type: String,
            required: true,
        },
        carnet: {
            type: String,
            required: true,
            unique: true,
            min: 8,
            max: 8,
        },
        password: {
            type: String,
            required: true,
            min: 8,
            max: 12,
        },
        confirmpassword: {
            type: String,
            required: true,
            min: 8,
            max: 12,
        },
        edad: {
            type: Number,
            required: true,
        },
        pais: {
            type: String,
            required: true,
        }
    }
);



module.exports = mongoose.model("usuarios", UserSchema);