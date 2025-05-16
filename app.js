import express from 'express'; 
import router from './routes/index.js';
import db from './config/db.js';

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

// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a la página principal');
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