// Al principio del archivo, después de importar los modelos
import express from 'express';
// resto de tus importaciones
import db from './config/db.js'; // Ajusta la ruta según tu estructura
import Viaje from './models/Viaje.js'; // Importa todos tus modelos
import Testimonial from './models/Testimoniales.js';

// Sincroniza la base de datos antes de iniciar el servidor
db.sync()
    .then(() => console.log('Tablas creadas correctamente'))
    .catch(error => console.log(error));

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Configuración de motor de vistas
app.set('view engine', 'pug');

// Middleware personalizado
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualyear = year.getFullYear();
    res.locals.nombresitio = "Agencia de viajes";
    next();
});

app.use('/', router);

// Conexión a base de datos
db.authenticate()
    .then(() => console.log('BD conectada'))
    .catch((error) => console.log(`Error al conectar a la base de datos: ${error}`));

// Iniciar servidor (SOLO UNA VEZ al final)
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto: ${PORT}`);
});