const { Client } = require('pg');

const connectionBiblioBuddy = new Client({
    user: "postgres",
    host: "localhost",
    database: "bibliobuddy",
    password: "root",
    port: "5432"
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