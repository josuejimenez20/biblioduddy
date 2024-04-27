const { connectionBiblioBuddyMySQL } = require('./connectionBibliobuddyMysqlConnect');

const queryToBiblioBuddySiteDBMySQL = async (query) => {
    return new Promise((resolve, reject) => {
        connectionBiblioBuddyMySQL.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = { queryToBiblioBuddySiteDBMySQL };
