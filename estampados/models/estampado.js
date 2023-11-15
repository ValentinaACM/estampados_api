const {Schema, model} = require('mongoose')

const EstampadoSchema = ({
    nombre_estampado:{
        type: String,
        unique:false,
        required:[true, 'El nombre del estampado es necesario']
    },

    descripcion:{
        type:String,
        unique: false,
        required:[true, 'La descripcion del estampado es requeriada'],
    },

    imagen_estampado: {
        type:String,
        required:[true, 'La imagen del estampado es requerida'],
    },

})


module.exports = model('Estampado', EstampadoSchema)