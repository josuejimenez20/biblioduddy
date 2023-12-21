const { connectionBiblioBuddy } = require('./connectionBibliobuddy');

const queryToBiblioBuddySiteDB = async (query) => {
    try {
        const response = await connectionBiblioBuddy.query(query);
        return response.rows;
    } catch (error) {
        return error;
    }
};

module.exports = { queryToBiblioBuddySiteDB };