const { createNewCommentService, getCommentsByPostIdService,
    updateCommentService
} = require('../../services/comments/commentsServices')


const createNewCommentController = async (req, res) => {
    try {

        const dataComment = req.body;

        const { message, code, data } = await createNewCommentService(dataComment);

        return res.status(code).json({
            message,
            data
        })


    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los comentarios'
        })
    }
}

const getCommentsByPostIdController = async (req, res) => {
    try {

        const {postId} = req.params;

        const { message, code, data } = await getCommentsByPostIdService(postId);

        return res.status(code).json({
            message,
            data
        })


    } catch (error) {
        return res.status(500).json({
            message: 'Error to get all comments'
        })
    }
}

const updateCommentController = async (req, res) => {
    try {

        const dataComment = req.body;

        const { message, code, data } = await updateCommentService(dataComment);

        return res.status(code).json({
            message,
            data
        })


    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los comentarios'
        })
    }
}


module.exports = {
    createNewCommentController,
    getCommentsByPostIdController,
    updateCommentController
}