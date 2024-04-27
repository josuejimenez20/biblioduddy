const { connectionBiblioBuddyMySQL } = require('./connectionBibliobuddyMysqlConnect');

const queryToBiblioBuddySiteDB = async (query) => {
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

module.exports = { queryToBiblioBuddySiteDB };

// const { connectionBiblioBuddy } = require('./connectionBibliobuddy');

// const queryToBiblioBuddySiteDB = async (query) => {
//     try {
//         const response = await connectionBiblioBuddy.query(query);
//         return response.rows;
//     } catch (error) {
//         return error;
//     }
// };

// module.exports = { queryToBiblioBuddySiteDB };
