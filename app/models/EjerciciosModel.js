const mongoose = require('mongoose');

const ejerciciosSchema = mongoose.Schema({
        nombre:{
            type: String,
            required: true
        },
        tipo:{
            type: String,
            required: true,
        },
        duracion:{
            type: Number,
            required: true
        },
        calorias:{
            type: Number,
            required: true
        }
})

const ejercicio = mongoose.model('ejercicios', ejerciciosSchema);

module.exports = ejercicio;