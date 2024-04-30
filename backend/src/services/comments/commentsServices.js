const { v4 } = require('uuid');
const { createNewCommentModel, getCommentsByPostIdModel,
    updateCommentModel
} = require('../../models/comments/commentsModels');


const createNewCommentService = async (dataComment) => {
    try {

        const commentId = v4();
        dataComment.commentId = commentId;

        const data = await createNewCommentModel(dataComment);

        return { code: 200, message: 'Comment created', data }


    } catch (error) {
        return error;
    }
}

const getCommentsByPostIdService = async (postId) => {
    try {

        const data = await getCommentsByPostIdModel(postId);

        return { code: 200, data, message: 'comments' }


    } catch (error) {
        return res.status(500).json({
            message: 'error to get all comments'
        })
    }
}

const updateCommentService = async (dataComment) => {
    try {

        const data = await updateCommentModel(dataComment);

        return { code: 200, data, message: 'comment updated' }


    } catch (error) {
        return res.status(500).json({
            message: 'error to update comment'
        })
    }
}


module.exports = {
    createNewCommentService,
    getCommentsByPostIdService,
    updateCommentService
}