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

        const result = await createNewPostModel(postData);
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
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, por lo que sumamos 1
    const año = fechaActual.getFullYear();

    const fechaFormateada = mes + '/' + dia + '/' + año;

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