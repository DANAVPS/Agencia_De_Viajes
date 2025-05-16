import express from 'express';

import {
    PaginaInicio,
    PaginaNosotros,
    PaginaViajes,
    PaginaDetalleViaje,
    PaginaTestimoniales,
} from '../controllers/paginaController.js';

import { GuardarTestimonial } from '../controllers/testimonialesController.js';

const router = express.Router();

router.get('/', PaginaInicio); // Ruta para la página de inicio

router.get('/nosotros', PaginaNosotros); //Ruta para la pagina nosotros

router.get('/viajes', PaginaViajes); // Ruta para la página de viajes

router.get('/viajes/.slug', PaginaDetalleViaje); // Ruta para la página de Detalle del viaje

router.get('/testimoniales', PaginaTestimoniales); // Ruta para la página de Testimoniales

router.post('/testimoniales', GuardarTestimonial); // Ruta para enviar el formulario de Testimoniales

export default router; // Exporta el enrutador para que pueda ser utilizado en otros archivos

