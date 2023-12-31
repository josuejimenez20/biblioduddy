const { createNewHistoryBookService,
    editHistoryBookService, deleteHistoryBookService,
    getHistoryBooksService }
    = require('../../services/historyBooksService/historyBooksService');

const createNewHistoryBookController =
    async (req, res) => {

        try {

            const dataBook = req.body;

            const result = await createNewHistoryBookService(dataBook)

            return res.status(200).json({
                message: "New Book Created"
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to History list"
            })
        }
    }

const editHistoryBookController =
    async (req, res) => {

        try {

            const dataBook = req.body;

            const result = await editHistoryBookService(dataBook)

            return res.status(200).json({
                message: "Book Edited"
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to History list"
            })
        }
    }

const deleteHistoryBookController =
    async (req, res) => {

        try {

            const { bookId } = req.params;

            const result = await deleteHistoryBookService(bookId)

            return res.status(200).json({
                message: "Book Deleted"
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to History list"
            })
        }
    }

const getHistoryBooksController =
    async (req, res) => {

        try {

            const { userId } = req.params;

            const result = await getHistoryBooksService(userId)

            return res.status(200).json({
                data: result
            })

        } catch (error) {
            res.status(500).json({
                message: "Error adding book to History list"
            })
        }
    }

module.exports = {
    createNewHistoryBookController,
    editHistoryBookController,
    deleteHistoryBookController,
    getHistoryBooksController
}