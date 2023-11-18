const {Schema, model} = require('mongoose')

const RolSchema = ({
    nombre_rol:{
        type: String,
        unique:true,
        required:[true, 'El nombre del rol es necesario']
    },

    permiso_rol:{
        type:String,
        unique: true,
        required:[true, 'Los permisos del rol son requeridos'],
    }
})


module.exports = model('Rol', RolSchema)