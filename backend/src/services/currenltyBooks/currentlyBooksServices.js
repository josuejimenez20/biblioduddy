const { v4 } = require('uuid')
const { createNewCurrentlyBookModel,
    editCurrentlyBookModel, deleteCurrentlyBookModel,
    getCurrentlyBooksModel
} = require('../../models/currenltyBooks/currenltyBooksModels')

const createNewCurrentlyBookService =
    async (dataBook) => {

        const bookId = v4();
        dataBook.bookId = bookId;

        try {
            const result = await createNewCurrentlyBookModel(dataBook);

            return result;

        } catch (error) {
            return error;
        }
    }

const editCurrentlyBookService =
    async (dataBook) => {

        try {
            const result = await editCurrentlyBookModel(dataBook);

            return result;

        } catch (error) {
            return error;
        }
    }

const deleteCurrentlyBookService =
    async (bookId) => {

        try {
            const result = await deleteCurrentlyBookModel(bookId);

            return result;

        } catch (error) {
            return error;
        }
    }

const getCurrentlyBooksService =
    async (userId) => {

        try {
            const result = await getCurrentlyBooksModel(userId);

            return result;

        } catch (error) {
            return error;
        }
    }


module.exports = {
    createNewCurrentlyBookService,
    editCurrentlyBookService,
    deleteCurrentlyBookService,
    getCurrentlyBooksService
}