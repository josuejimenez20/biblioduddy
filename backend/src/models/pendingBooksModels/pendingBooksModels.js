const { queryToBiblioBuddySiteDB } = require('../../database/querieBiblioBuddy');

const createNewPendingBookModel = async (dataBook) => {

    const { userId, bookId, name,
        author, gender,
        publication_date, editorial,
        imagine_path } = dataBook;

    const query = `

    INSERT INTO public.user_books(
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

    SELECT pending_book_list_id 
    FROM public.pending_books_list
        WHERE fk_user_id = '${userId}';
        
        `;

    try {
        const result = await queryToBiblioBuddySiteDB(query);

        const listId = result[0].pending_book_list_id;

        const query2 = `
        
        INSERT INTO public.pending_books(
            fk_pending_book_list_id, fk_book_id)
            VALUES ('${listId}', '${bookId}');
            
            `;

        const finalResult = await queryToBiblioBuddySiteDB(query2);

        return finalResult;
    } catch (error) {
        return error;
    }
}

const editPendingBookModel = async (dataBook) => {

    const { userId, bookId, name,
        author, gender,
        publication_date, editorial,
        image_path } = dataBook;

    const query = `
    UPDATE public.user_books
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

const deletePendingBookModel = async (bookId) => {

    const query = `
    DELETE FROM public.pending_books cb
	    WHERE cb.fk_book_id = '${bookId}';
	
    DELETE FROM public.user_books ub
	    WHERE ub.book_id = '${bookId}';
        
        `;

    try {

        const result = await queryToBiblioBuddySiteDB(query);
        return result;
    } catch (error) {
        return error;
    }
}

const getPendingBooksModel = async (userId) => {

    const query = `
    SELECT ub.* FROM user_books ub
        INNER JOIN pending_books pb
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
    createNewPendingBookModel,
    editPendingBookModel,
    deletePendingBookModel,
    getPendingBooksModel
}