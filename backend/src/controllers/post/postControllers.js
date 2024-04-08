const { createNewPostService, updatePostService,
    deletePostService, getAllPostsService, getPostByIdService,
    getAllPostsByIdServie
} = require('../../services/postServices/postServices');

const createNewPostController = async (req, res) => {

    try {

        const { success, code, message } = await createNewPostService(req.body);

        if (success === true) {
            return res.status(code).json({
                message,
            })
        }

        return res.status(code).json({
            message
        })


    } catch (error) {
        return res.status(500).json({
            message: 'Error to create post'
        })
    }
}

const updatePostController = async (req, res) => {

    try {

        const { message, code } = await updatePostService(req.body);

        return res.status(code).json({
            message
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Error to update post'
        })
    }
}

const deletePostController = async (req, res) => {
    try {

        const { postId } = req.params;
        const { code, message } = await deletePostService(postId);
        return res.status(code).json({
            message
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error to update post'
        })
    }
}

const getAllPostsController = async (req, res) => {

    const posts = await getAllPostsService();

    try {
        res.status(200).json({
            posts
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los posts'
        })
    }
}

const getPostByIdController = async (req, res) => {
    try {

        const { postId } = req.params;

        const post = await getPostByIdService(postId);

        return res.status(200).json({
            post
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener el post'
        })
    }
}

const getAllPostsByIdController = async (req, res) => {
    try {

        const {userId} = req.params;
        const posts = await getAllPostsByIdServie(userId);

        return res.status(200).json({
            posts
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los posts'
        })
    }
}

module.exports = {
    createNewPostController,
    updatePostController,
    deletePostController,
    getAllPostsController,
    getPostByIdController,
    getAllPostsByIdController
}