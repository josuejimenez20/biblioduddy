const mysql = require('mysql2');

const connectionBiblioBuddyMySQL = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
});

const bibliobuddyDBConnectionMySQL = () => {
    connectionBiblioBuddyMySQL.connect(function (error) {
        if (error) {
            console.error('Error al conectar a la base de datos: ', error);
            return;
        }
        console.log('BubliBuddy Data Base Connected');
    });
};

module.exports = {
    bibliobuddyDBConnectionMySQL,
    connectionBiblioBuddyMySQL
};
