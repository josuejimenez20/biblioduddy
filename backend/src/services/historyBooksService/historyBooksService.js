const { v4 } = require('uuid')
const { createNewHistoryBookModel,
    editHistoryBookModel, deleteHistoryBookModel,
    getHistoryBooksModel
} = require('../../models/historyBooksModels/historyBooksModels')

const createNewHistoryBookService =
    async (dataBook) => {

        const bookId = v4();
        dataBook.bookId = bookId;

        try {
            const result = await createNewHistoryBookModel(dataBook);

            return result;

        } catch (error) {
            return error;
        }
    }

const editHistoryBookService =
    async (dataBook) => {

        try {
            const result = await editHistoryBookModel(dataBook);

            return result;

        } catch (error) {
            return error;
        }
    }

const deleteHistoryBookService =
    async (bookId) => {

        try {
            const result = await deleteHistoryBookModel(bookId);

            return result;

        } catch (error) {
            return error;
        }
    }

const getHistoryBooksService =
    async (userId) => {

        try {
            const result = await getHistoryBooksModel(userId);

            return result;

        } catch (error) {
            return error;
        }
    }


module.exports = {
    createNewHistoryBookService,
    editHistoryBookService,
    deleteHistoryBookService,
    getHistoryBooksService
}