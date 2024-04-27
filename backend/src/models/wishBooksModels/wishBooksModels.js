const { queryToBiblioBuddySiteDB } = require('../../database/querieBiblioBuddy');

const createNewWishBookModel = async (dataBook) => {

    const { userId, bookId, name,
        author, gender,
        publication_date, editorial,
        imagine_path } = dataBook;

    const query = `

    INSERT INTO user_books(
        book_id, fk_user_id, name, author, gender, 
        publication_date, editorial, image_path)
        VALUES ('${bookId}', '${userId}', '${name}', '${author}', 
        '${gender}', '${publication_date}', '${editorial}', '${imagine_path}');
        
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

    SELECT wish_book_list_id 
    FROM wish_list_books
        WHERE fk_user_id = '${userId}';
        
        `;

    try {
        const result = await queryToBiblioBuddySiteDB(query);

        const listId = result[0].wish_book_list_id;

        const query2 = `
        
        INSERT INTO wish_books(
            fk_wish_list_book_id, fk_book_id)
            VALUES ('${listId}', '${bookId}');
            
            `;

        const finalResult = await queryToBiblioBuddySiteDB(query2);

        return finalResult;
    } catch (error) {
        return error;
    }
}

const editWishBookModel = async (dataBook) => {

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

const deleteWishBookModel = async (bookId) => {

    const query = `
    DELETE FROM wish_books cb
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

const getWishBooksModel = async (userId) => {

    const query = `
    SELECT ub.* FROM user_books ub
        INNER JOIN wish_books pb
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
    createNewWishBookModel,
    editWishBookModel,
    deleteWishBookModel,
    getWishBooksModel
}