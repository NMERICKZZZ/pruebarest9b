const ejercicioModel = require('../models/EjerciciosModel');

function buscarTodo(req, res) {
    ejercicioModel.find({})
        .then(ejercicios => {
            if (ejercicios.lenghth) {
                return res.status(200).send({ejercicios})
            }
            return res.status(204).send({mensaje: 'No hay información que buscar'});
        })

        .catch(error => {
            res.status(404).send({
                mensaje: `Error al buscar la información ${e}`
            });
        });
}

module.exports = {
    buscarTodo
}