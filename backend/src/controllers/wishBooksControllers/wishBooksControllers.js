const { createNewWishBookService,
    editWishBookService, deleteWishBookService,
    getWishBooksService }
    = require('../../services/wishBooksServices/wishBooksServices');

const createNewWishBookController =
    async (req, res) => {

        try {

            const dataBook = req.body;

            const result = await createNewWishBookService(dataBook)

            return res.status(200).json({
                message: "New Book Created"
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to Wish list"
            })
        }
    }

const editWishBookController =
    async (req, res) => {

        try {

            const dataBook = req.body;

            const result = await editWishBookService(dataBook)

            return res.status(200).json({
                message: "Book Edited"
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to Wish list"
            })
        }
    }

const deleteWishBookController =
    async (req, res) => {

        try {

            const { bookId } = req.params;

            const result = await deleteWishBookService(bookId)

            return res.status(200).json({
                message: "Book Deleted"
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to Wish list"
            })
        }
    }

const getWishBooksController =
    async (req, res) => {

        try {

            const { userId } = req.params;

            const result = await getWishBooksService(userId)

            return res.status(200).json({
                data: result
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to Wish list"
            })
        }
    }

module.exports = {
    createNewWishBookController,
    editWishBookController,
    deleteWishBookController,
    getWishBooksController
}