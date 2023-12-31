const { queryToBiblioBuddySiteDB } = require('../../database/querieBiblioBuddy');

const createNewUserModel = async (userData) => {

    const { userId, email, password,
        name, lastname, second_lastname, listId } = userData;

    const query = `
    
    BEGIN; 

    INSERT INTO users
        (user_id, email, password) 
        VALUES ('${userId}', '${email}', '${password}');
    
    INSERT INTO public.user_information(
        fk_user_id, name, lastname, second_lastname)
        VALUES ('${userId}', '${name}', '${lastname}', '${second_lastname}');
    
    COMMIT;`;

    try {

        const result = await queryToBiblioBuddySiteDB(query);
        await createNewListsModel({ userId, listId });

        return result;
    } catch (error) {
        return error;
    }
}

const createNewListsModel = async (listData) => {

    const { userId, listId } = listData;

    const query = `
    
    BEGIN; 

    INSERT INTO public.currently_reading_list_books(
        currenlty_book_list_id, fk_user_id)
        VALUES ('${listId}', '${userId}');

    INSERT INTO public.pending_books_list(
        pending_book_list_id, fk_user_id)
        VALUES ('${listId}', '${userId}');

    INSERT INTO public.reading_history_books_list(
        reading_book_list_id, fk_user_id)
        VALUES ('${listId}', '${userId}');

    INSERT INTO public.wish_list_books(
        wish_book_list_id, fk_user_id)
        VALUES ('${listId}', '${userId}');
    
    COMMIT;`;

    try {
        const result = await queryToBiblioBuddySiteDB(query);

        return result;
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