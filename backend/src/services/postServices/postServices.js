const { v4 } = require('uuid')
const { createNewPostModel, updatePostModel,
    deletePostModel, getAllPostsModel, getPostByIdModel,
    getAllPostsByIdModel, getPostsByKeyWordModel
} = require("../../models/postModels/postModels")

const createNewPostService = async (postData) => {
    try {

        const currentDate = await getCurrentDate();
        const post_id = v4();

        postData.currentDate = currentDate;
        postData.post_id = post_id;

        await createNewPostModel(postData);

        return {
            success: true,
            code: 200,
            message: 'Post Created'
        };

    } catch (error) {
        return {
            success: false,
            code: 500,
            message: 'Error to create post'
        }
    }
}

const updatePostService = async (postData) => {

    try {

        await updatePostModel(postData);

        return { code: 200, message: 'Post Updated' }

    } catch (error) {
        return error;
    }
}

const deletePostService = async (postId) => {
    try {

        await deletePostModel(postId);
        return { code: 200, message: 'Post eliminado' }

    } catch (error) {

    }
}

const getAllPostsService = async () => {
    try {

        const posts = await getAllPostsModel();
        return posts;
    } catch (error) {
        return error;
    }
}

const getPostByIdService = async (postId) => {
    try {

        const post = getPostByIdModel(postId);

        return post;
    } catch (error) {
        return error
    }
}

const getAllPostsByIdServie = async (userId) => {

    try {

        const posts = await getAllPostsByIdModel(userId);
        return posts;
    } catch (error) {
        return error;
    }
}

const getPostsByKeyWordService = async (keyWord) => {
    try {

        const data = await getPostsByKeyWordModel(keyWord);

        return { code: 200, data, message: "Posts by key word" }

    } catch (error) {
        return error;
    }
}

const getCurrentDate = async () => {
    const fechaActual = new Date();

    // Obtener los componentes de la fecha actual
    const year = fechaActual.getFullYear();
    const month = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Asegurar que el mes tenga dos dígitos
    const day = fechaActual.getDate().toString().padStart(2, '0'); // Asegurar que el mes tenga dos dígitos

    // const fechaFormateada = mes + '/' + dia + '/' + año;
    const fechaFormateada = year + '/' + month + '/' + day;

    return fechaFormateada;
}

module.exports = {
    createNewPostService,
    updatePostService,
    deletePostService,
    getAllPostsService,
    getPostByIdService,
    getAllPostsByIdServie,
    getPostsByKeyWordService
}