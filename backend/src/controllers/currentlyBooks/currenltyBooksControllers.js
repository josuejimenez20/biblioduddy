const { createNewCurrentlyBookService,
    editCurrentlyBookService, deleteCurrentlyBookService,
    getCurrentlyBooksService }
    = require('../../services/currenltyBooks/currentlyBooksServices');

const createNewCurrneltyBookController =
    async (req, res) => {

        try {

            const dataBook = req.body;

            const result = await createNewCurrentlyBookService(dataBook)

            return res.status(200).json({
                message: "New Book Created"
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to currently list"
            })
        }
    }

const editCurrneltyBookController =
    async (req, res) => {

        try {

            const dataBook = req.body;

            const result = await editCurrentlyBookService(dataBook)

            return res.status(200).json({
                message: "Book Edited"
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to currently list"
            })
        }
    }

const deleteCurrneltyBookController =
    async (req, res) => {

        try {

            const { bookId } = req.params;

            const result = await deleteCurrentlyBookService(bookId)

            return res.status(200).json({
                message: "Book Deleted"
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to currently list"
            })
        }
    }

const getCurrentlyBooksController =
    async (req, res) => {

        try {

            const { userId } = req.params;

            const result = await getCurrentlyBooksService(userId)

            return res.status(200).json({
                data: result
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to currently list"
            })
        }
    }

module.exports = {
    createNewCurrneltyBookController,
    editCurrneltyBookController,
    deleteCurrneltyBookController,
    getCurrentlyBooksController
}