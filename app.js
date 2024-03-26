import mongoose from "mongoose"
const url_db = 'mongodb://localhost:27017/utma'

mongoose.connect(url_db)
.then(() => (
    console.log('conexion exitosa')
))
.catch ((err) => (
    console.log('Fallo la conexion a la base de datos')
))

const alumnos_esquema = new mongoose.Schema(
{
    name: {
        type: String
    },
    apepat: {
        type: String

    },
    numerotel: {
        type: Number
    }
    }
)
const alumnos = new mongoose.model('tabla de registro de alumnos, alumnos_esquemas')

    alumnos.create(
    {
     name: 'jesus',
     apepat: 'salazar',
     numerotel: 4482828398
    }
)
