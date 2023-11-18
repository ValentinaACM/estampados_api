const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador

const { getRol, postRol, putRol, deleteRol } = require('../controllers/rol')

route.get('/', getRol)

route.post('/', postRol)

route.put('/', putRol)

route.delete('/', deleteRol)
// //Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 