const { v4 } = require('uuid')
const { createNewWishBookModel,
    editWishBookModel, deleteWishBookModel,
    getWishBooksModel
} = require('../../models/wishBooksModels/wishBooksModels')

const createNewWishBookService =
    async (dataBook) => {

        const bookId = v4();
        dataBook.bookId = bookId;

        try {
            const result = await createNewWishBookModel(dataBook);

            return result;

        } catch (error) {
            return error;
        }
    }

const editWishBookService =
    async (dataBook) => {

        try {
            const result = await editWishBookModel(dataBook);

            return result;

        } catch (error) {
            return error;
        }
    }

const deleteWishBookService =
    async (bookId) => {

        try {
            const result = await deleteWishBookModel(bookId);

            return result;

        } catch (error) {
            return error;
        }
    }

const getWishBooksService =
    async (userId) => {

        try {
            const result = await getWishBooksModel(userId);

            return result;

        } catch (error) {
            return error;
        }
    }


module.exports = {
    createNewWishBookService,
    editWishBookService,
    deleteWishBookService,
    getWishBooksService
}