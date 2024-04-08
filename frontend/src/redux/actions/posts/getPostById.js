import axios from 'axios';

export const getPostById = async (postId) => {

    try {

        const result = await axios.get(`http://localhost:3000/api/v1/post/${postId}`);

        return result.data.post[0]

    } catch (error) {
        return {
            status: 404,
            message: 'Ususario no encontrado'
        };
    }

}