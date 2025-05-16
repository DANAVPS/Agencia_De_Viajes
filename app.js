// Importa el módulo express, un framework para construir aplicaciones web en Node
import express from 'express'; 

import router from './routes/index.js'; // Importa el enrutador definido en este archivo

import db from './config/db.js'; // Importa la configuración de la base de datos

// Crea una instancia de una aplicación de Express
const app = express();

// Define el puerto en el que el servidor escuchará
// Usa el valor definido en la variable de entorno PORT o 3000 si no está definido
const PORT = process.env.PORT || 4000;

// Inicia el servidor para que escuche en el puerto especificado
app.listen(PORT, () => {
    // Muestra un mensaje en la consola indicando que el servidor está corriendo
    console.log(`El servidor está corriendo en el puerto: ${PORT}`);
});

// Middlewares clave
app.use(express.urlencoded({ extended: true })); // Para parsear datos de formularios
app.use(express.json()); // Para parsear JSON

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la página principal'); // Responde con un mensaje de bienvenida
});

app.use('/', router); // Usa el enrutador para manejar las rutas definidas

app.use(express.static('public')); // Sirve archivos estáticos desde la carpeta 'public'

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto: ${PORT}`); // Muestra un mensaje en la consola indicando que el servidor está corriendo
});

app.set('view engine','pug'); // Establece el motor de plantillas a Pug

//   ----------------------------------------------------------------------------------------------------------------------------------------

app.use( (req, res, next) => {
    const year = new Date(); // Obtiene el año actual
    //los locales me permite compartir valores de un archivo a una vista
    res.locals.actualyear = year.getFullYear(); // Almacena el año actual en la variable local 'actualyear'
    res.locals.nombresitio = "Agencia de viajes"; // Almacena el nombre del sitio en la variable local 'nombresitio'
    next(); // Llama al siguiente middleware o ruta
});

db.authenticate() // Intenta autenticar la conexión a la base de datos
    .then(() => console.log('BD conectada')) // Muestra un mensaje si la conexión es exitosa
    .catch((error) => console.log(`Error al conectar a la base de datos: ${error}`)); // Muestra un mensaje si hay un error en la conexión

// app.get('/send', (req, res) => {
//     res.send('Hola desde res.send'); // Responde con un mensaje de texto
// });

// // Ruta /json
// app.get('/json', (req, res) => {
//     res.json({
//         mensaje: 'Hola en formato JSON', 
//         usuario: 'Dana', 
//         activo: true
//     }); // Responde con un objeto JSON
// });

// // Redireccionamiento
// app.get('/redirect', (req, res) => {
//     res.redirect('/json'); // Redirecciona a la ruta /json
// });

// // Renderizar vista con datos
// app.get('/vista', (req, res) => {
//     res.render('index', { titulo: 'Hola desde EJS', usuario: 'Dana' }); // Renderiza una vista
// });

// // Obtener parámetros de consulta (URL)
// app.get('/buscar', (req, res) => {
//     const { nombre, edad } = req.query;
//     res.send(`Parámetros recibidos: nombre = ${nombre}, edad = ${edad}`); // Muestra los parámetros recibidos
// });

// // req.params - Obtener parámetros en la ruta
// app.get('/usuario/:id', (req, res) => {
//     const { id } = req.params;
//     res.send(`ID del usuario recibido: ${id}`); // Muestra el ID del usuario recibido
// });