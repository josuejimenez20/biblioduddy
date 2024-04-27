const { queryToBiblioBuddySiteDB } = require('../../database/querieBiblioBuddy');

const createNewUserModel = async (userData) => {
    const { userId, email, password, name,
        lastname, second_lastname, listId } = userData;

    const userQuery = `INSERT INTO users (user_id, email, password) VALUES ("${userId}", "${email}", "${password}")`;
    const userInfoQuery = `INSERT INTO user_information (fk_user_id, name, lastname, second_lastname) VALUES ("${userId}", "${name}", "${lastname}", "${second_lastname}")`;

    try {
        await queryToBiblioBuddySiteDB(userQuery);
        await queryToBiblioBuddySiteDB(userInfoQuery);
        await createNewListsModel({ userId, listId });
        return { success: true };
    } catch (error) {
        return error;
    }
}


const createNewListsModel = async (listData) => {

    const { userId, listId } = listData;

    const queryCurrentlyList = `
    INSERT INTO currently_reading_list_books(
        currently_book_list_id, fk_user_id)
        VALUES ('${listId}', '${userId}');`;

    const queryPendingList = `
    INSERT INTO pending_books_list(
        pending_book_list_id, fk_user_id)
        VALUES ('${listId}', '${userId}');`;

    const queryHistoryList = `
    INSERT INTO reading_history_books_list(
        reading_book_list_id, fk_user_id)
        VALUES ('${listId}', '${userId}');`;

    const queryWishList = `
    INSERT INTO wish_list_books(
        wish_book_list_id, fk_user_id)
        VALUES ('${listId}', '${userId}');
    `;

    try {
        await queryToBiblioBuddySiteDB(queryCurrentlyList)
        await queryToBiblioBuddySiteDB(queryPendingList)
        await queryToBiblioBuddySiteDB(queryHistoryList)
        await queryToBiblioBuddySiteDB(queryWishList)

        return true;
    } catch (error) {
        return error;
    }
}

const loginUserModel = async (userData) => {

    const { email, password } = userData;
    const query = `
    SELECT * 
    FROM users u
        WHERE u.email = '${email}' 
        AND u.password = '${password}'`;

    try {
        const result = await queryToBiblioBuddySiteDB(query);

        return result;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createNewUserModel,
    loginUserModel
}