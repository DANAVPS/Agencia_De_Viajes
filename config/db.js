import Sequelize from 'sequelize';

const db = new Sequelize(
    process.env.DB_NAME || 'agenciadeviajes_commonrain',
    process.env.DB_USER || 'agenciadeviajes_commonrain',
    process.env.DB_PASSWORD || '921ea7f39737ad4f2b3e91edc73b9b0d5a564aef',
    {
        host: process.env.DB_HOST || '10yus.h.filess.io',
        port: process.env.DB_PORT || '3307',
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

export default db;