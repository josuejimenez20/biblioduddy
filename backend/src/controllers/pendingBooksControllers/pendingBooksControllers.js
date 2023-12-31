const { createNewPendingBookService,
    editPendingBookService, deletePendingBookService,
    getPendingBooksService }
    = require('../../services/pendingBooksServices/pendingBooksServices');

const createNewPendingBookController =
    async (req, res) => {

        try {

            const dataBook = req.body;

            const result = await createNewPendingBookService(dataBook)

            return res.status(200).json({
                message: "New Book Created"
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to Pending list"
            })
        }
    }

const editPendingBookController =
    async (req, res) => {

        try {

            const dataBook = req.body;

            const result = await editPendingBookService(dataBook)

            return res.status(200).json({
                message: "Book Edited"
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to Pending list"
            })
        }
    }

const deletePendingBookController =
    async (req, res) => {

        try {

            const { bookId } = req.params;

            const result = await deletePendingBookService(bookId)

            return res.status(200).json({
                message: "Book Deleted"
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to Pending list"
            })
        }
    }

const getPendingBooksController =
    async (req, res) => {

        try {

            const { userId } = req.params;

            const result = await getPendingBooksService(userId)

            return res.status(200).json({
                data: result
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to Pending list"
            })
        }
    }

module.exports = {
    createNewPendingBookController,
    editPendingBookController,
    deletePendingBookController,
    getPendingBooksController
}