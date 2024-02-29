const { Client } = require('pg');

const connectionBiblioBuddy = new Client({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
})

const bibliobuddyDBConnection = () => {

    connectionBiblioBuddy.connect(function (error) {
        if (error) throw error;
        console.log('BubliBuddy Data Base Connected');
    })

}

module.exports = {
    bibliobuddyDBConnection,
    connectionBiblioBuddy
};