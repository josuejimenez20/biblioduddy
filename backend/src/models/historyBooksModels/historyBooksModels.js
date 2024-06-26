const { queryToBiblioBuddySiteDB } = require('../../database/querieBiblioBuddy');

const createNewHistoryBookModel = async (dataBook) => {

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

        await createNewBookInListModel(dataBook);

        return;
    } catch (error) {
        return error;
    }
}

const createNewBookInListModel = async (dataBook) => {

    const { userId, bookId } = dataBook;

    const query = `

    SELECT reading_book_list_id
    FROM reading_history_books_list
        WHERE fk_user_id = '${userId}';
        
        `;

    try {
        const result = await queryToBiblioBuddySiteDB(query);

        const listId = result[0].reading_book_list_id;

        const query2 = `
        
        INSERT INTO reading_history_books(
            fk_reading_history_book_list_id, fk_book_id)
            VALUES ('${listId}', '${bookId}');
            
            `;

        const finalResult = await queryToBiblioBuddySiteDB(query2);

        return finalResult;
    } catch (error) {
        return error;
    }
}

const editHistoryBookModel = async (dataBook) => {

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

const deleteHistoryBookModel = async (bookId) => {

    const query = `
    DELETE FROM reading_history_books cb
	    WHERE cb.fk_book_id = '${bookId}';`

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

const getHistoryBooksModel = async (userId) => {

    const query = `
    SELECT ub.* FROM user_books ub
        INNER JOIN reading_history_books pb
        ON ub.book_id = pb.fk_book_id
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
    createNewHistoryBookModel,
    editHistoryBookModel,
    deleteHistoryBookModel,
    getHistoryBooksModel
}