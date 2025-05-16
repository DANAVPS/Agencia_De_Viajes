import Testimoniales from '../models/Testimoniales.js';

const GuardarTestimonial = async (req, res) => {
    // Extrae los datos del formulario
    const { nombre, correo, mensaje } = req.body;

    const errores = []; // Inicializa un array para almacenar errores

    // Validaciones
    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega tu nombre' });
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Tu correo es obligatorio' });
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Agrega tu mensaje' });
    }

    // Si hay errores, volver a la página anterior con los errores
    if (errores.length > 0) {
        return res.render('testimoniales', {
            errores, 
            nombre, 
            correo, 
            mensaje,
            testimoniales: await Testimonial.findAll()
        });
    }

    try {
        // Si no hay errores, guardar el testimonial en la base de datos
        await Testimoniales.create({
            nombre,
            correo,
            mensaje
        });

        // Redirigir o responder con éxito
        res.redirect('/testimoniales'); // O donde desees redirigir después de guardar

    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al guardar el testimonial.');
    }
};

export { GuardarTestimonial };
