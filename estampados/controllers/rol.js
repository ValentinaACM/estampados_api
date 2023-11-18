const {response} = require('express')

Rol = require('../models/rol')

const getRol = async(req, res) => {
    const roles = await Rol.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: roles
    })
}

const postRol = async(req, res) => {
    const datos = req.query //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const rol = new Rol(datos) //Instanciar el objeto
        await rol.save()//Guardar en la base de dato  
        console.log(rol) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putRol = async(req, res) =>{
    const {nombre_rol, permiso_rol} = req.query
    try {
        const rol = await Rol.findOneAndUpdate({nombre_rol: nombre_rol},
            {permiso_rol:permiso_rol})
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteRol = async(req, res) =>{
    const {nombre_rol} = req.query //Desestructurar
    try {
        const rol = await Rol.findOneAndDelete({nombre_rol: nombre_rol})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getRol,
    postRol,
    putRol,
    deleteRol
}