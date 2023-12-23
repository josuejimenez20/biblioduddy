const { queryToBiblioBuddySiteDB } = require('../../database/querieBiblioBuddy');

const createNewUserModel = async (userData) => {

    const { userId, email, password,
        name, lastname, second_lastname } = userData;

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