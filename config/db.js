import { Sequelize } from "sequelize";

const db = new Sequelize ('Agenciadeviajes', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false // Desactiva los timestamps automáticos de Sequelize
    },
    pool: {
        max: 5, // Número máximo de conexiones en el pool
        min: 0, // Número mínimo de conexiones en el pool
        acquire: 30000, // Tiempo máximo para adquirir una conexión (en milisegundos)
        idle: 10000 // Tiempo máximo que una conexión puede estar inactiva antes de ser liberada (en milisegundos)
    },
    operatorsAliases: false, // Desactiva los alias de operadores para evitar advertencias
});

export default db; // Exporta la instancia de Sequelize para su uso en otras partes de la aplicación