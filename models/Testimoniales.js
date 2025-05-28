import { Sequelize } from "sequelize";
import db from "../config/db.js"; // Importa la configuración de la base de datos

const Testimonial = db.define('testimoniales', {
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

