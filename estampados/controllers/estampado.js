const {response} = require('express')

Estampado = require('../models/estampado')

const getEstampado = async(req, res) => {
    const estampados = await Estampado.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: estampados
    })
}

const postEstampado = async(req, res) => {
    const datos = req.query //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const estampado = new Estampado(datos) //Instanciar el objeto
        await estampado.save()//Guardar en la base de dato  
        console.log(estampado) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putEstampado = async(req, res) =>{
    const {nombre_estampado, descripcion, imagen_estampado} = req.query
    try {
        const estampado = await Estampado.findOneAndUpdate({nombre_estampado: nombre_estampado},
            {imagen_estampado:imagen_estampado, descripcion:descripcion})
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteEstampado = async(req, res) =>{
    const {nombre_estampado} = req.query //Desestructurar
    try {
        const estampado = await Estampado.findOneAndDelete({nombre_estampado: nombre_estampado})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getEstampado,
    postEstampado,
    putEstampado,
    deleteEstampado
}