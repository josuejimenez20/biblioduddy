const { queryToBiblioBuddySiteDB } = require('../../database/querieBiblioBuddy');

const createNewUserModel = async (userData) => {

    const query = `SELECT * FROM users`;

    try {
        const result = await queryToBiblioBuddySiteDB(query);

        return result;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createNewUserModel
}