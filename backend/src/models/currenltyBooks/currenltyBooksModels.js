const { queryToBiblioBuddySiteDB } = require('../../database/querieBiblioBuddy');

const createNewCurrentlyBookModel = async (dataBook) => {

    const { userId, bookId, name,
        author, gender,
        publication_date, editorial,
        image_path } = dataBook;

    const query = `

    INSERT INTO user_books(
        book_id, fk_user_id, name, author, gender, 
        publication_date, editorial, image_path)
        VALUES ('${bookId}', '${userId}', '${name}', '${author}', 
        '${gender}', '${publication_date}', '${editorial}', '${image_path}');
        
        `;

    try {

        const result = await queryToBiblioBuddySiteDB(query);
        console.log(result);

        await createNewBookInListModel(dataBook);

        return;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const createNewBookInListModel = async (dataBook) => {

    const { userId, bookId } = dataBook;

    const query = `

    SELECT currently_book_list_id 
    FROM currently_reading_list_books
        WHERE fk_user_id = '${userId}';
        
        `;

    try {
        const result = await queryToBiblioBuddySiteDB(query);

        const listId = result[0].currently_book_list_id;

        const query2 = `
        
        INSERT INTO currently_reading_books(
            fk_currently_list_book_id, fk_book_id)
            VALUES ('${listId}', '${bookId}');
            
            `;

        const finalResult = await queryToBiblioBuddySiteDB(query2);

        return finalResult;
    } catch (error) {
        return error;
    }
}

const editCurrentlyBookModel = async (dataBook) => {

    const { userId, bookId, name,
        author, gender,
        publication_date, editorial,
        image_path } = dataBook;

    const query = `
    UPDATE user_books
	SET name='${name}', author='${author}', 
        gender='${gender}', publication_date='${publication_date}',
        editorial='${editorial}', image_path='${image_path}'
	        WHERE book_id = '${bookId}';
        
        `;

    try {

        const result = await queryToBiblioBuddySiteDB(query);
        return result;
    } catch (error) {
        return error;
    }
}

const deleteCurrentlyBookModel = async (bookId) => {

    const query = `
    DELETE FROM currently_reading_books cb
	    WHERE cb.fk_book_id = '${bookId}';  `;
	
   const query2 = `DELETE FROM user_books ub
	    WHERE ub.book_id = '${bookId}';   
        `;

    try {

        await queryToBiblioBuddySiteDB(query);
        const result = await queryToBiblioBuddySiteDB(query2);
        return result;
    } catch (error) {
        return error;
    }
}

const getCurrentlyBooksModel = async (userId) => {

    const query = `
    SELECT ub.* FROM user_books ub
        INNER JOIN currently_reading_books cb
        ON ub.book_id = cb.fk_book_id
        WHERE fk_user_id = '${userId}';
        
        `;

    try {

        const result = await queryToBiblioBuddySiteDB(query);
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createNewCurrentlyBookModel,
    editCurrentlyBookModel,
    deleteCurrentlyBookModel,
    getCurrentlyBooksModel
}