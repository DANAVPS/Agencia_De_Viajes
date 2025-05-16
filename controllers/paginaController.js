import Viaje from '../models/Viaje.js';
import Testimoniales from '../models/Testimoniales.js';

const PaginaInicio = async (req, res) => {
    const promises = [];

    promises.push(Viaje.findAll({
        limit: 3,
    }));
    promises.push(Testimoniales.findAll({
        limit: 3,
    }));
    try {
        const resultado = await Promise.all(promises);

        console.log(resultado[0]); 

        res.render('inicio', {
            viajes: resultado[0],
            testimoniales: resultado[1],
            clase: 'home',
            page: 'Inicio',
            
        });
    } catch (error) {
        console.log(error);
    }
}

const PaginaNosotros = (req, res) => {
    res.render('nosotros', {
        page: 'Nosotros',
    });
}

const PaginaViajes = async (req, res) => {
    const viajes = await Viaje.findAll(); // Obtiene todos los viajes de la base de datos

    res.render('viajes', {
        page: 'Viajes',
        viajes,
    });
}

const PaginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimoniales.findAll(); // Obtiene todos los testimoniales de la base de datos

        res.render('testimoniales', {
            page: 'Testimoniales',
            testimoniales,
        });
    } catch (error) {
        console.log(error); // Muestra el error en la consola
    }
}

const PaginaDetalleViaje = async (req, res) => {


    const { slug } = req.params; // Obtiene el slug de los parámetros de la URL

    try {
        const viaje = await Viaje.findOne({ where: { slug } }); // Busca un viaje por su slug

        res.render('viaje', {
            page: 'Información Viaje',
            viaje,
        });
    } catch (error) {
        console.log(error); // Muestra el error en la consola
    }
}

export {
    PaginaInicio,
    PaginaNosotros,
    PaginaViajes,
    PaginaTestimoniales,
    PaginaDetalleViaje,
}