const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador

const { getEstampado, postEstampado, putEstampado, deleteEstampado } = require('../controllers/estampado')

route.get('/', getEstampado)

route.post('/', postEstampado)

route.put('/', putEstampado)

route.delete('/', deleteEstampado)
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