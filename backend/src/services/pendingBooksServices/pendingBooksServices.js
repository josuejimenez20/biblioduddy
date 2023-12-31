const { v4 } = require('uuid')
const { createNewPendingBookModel,
    editPendingBookModel, deletePendingBookModel,
    getPendingBooksModel
} = require('../../models/pendingBooksModels/pendingBooksModels')

const createNewPendingBookService =
    async (dataBook) => {

        const bookId = v4();
        dataBook.bookId = bookId;

        try {
            const result = await createNewPendingBookModel(dataBook);

            return result;

        } catch (error) {
            return error;
        }
    }

const editPendingBookService =
    async (dataBook) => {

        try {
            const result = await editPendingBookModel(dataBook);

            return result;

        } catch (error) {
            return error;
        }
    }

const deletePendingBookService =
    async (bookId) => {

        try {
            const result = await deletePendingBookModel(bookId);

            return result;

        } catch (error) {
            return error;
        }
    }

const getPendingBooksService =
    async (userId) => {

        try {
            const result = await getPendingBooksModel(userId);

            return result;

        } catch (error) {
            return error;
        }
    }


module.exports = {
    createNewPendingBookService,
    editPendingBookService,
    deletePendingBookService,
    getPendingBooksService
}