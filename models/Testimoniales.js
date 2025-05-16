import { Sequelize } from "sequelize";
import db from "../config/db.js"; // Importa la configuración de la base de datos

const Testimonial = db.define('testimoniales', {
    // Define el modelo 'Testimonial' basado en la tabla 'testimoniales'
    // id: {
    //     type: Sequelize.INTEGER, // Tipo de dato entero
    //     primaryKey: true, // Define esta columna como clave primaria
    //     autoIncrement: true // Incrementa automáticamente el valor de la clave primaria
    // },
    nombre: {
        type: Sequelize.STRING, // Tipo de dato cadena
    },
    correo: {
        type: Sequelize.STRING, // Tipo de dato cadena
    },
    mensaje: {
        type: Sequelize.STRING, // Tipo de dato cadena
    }
}, {
    timestamps: false
});

export default Testimonial;

