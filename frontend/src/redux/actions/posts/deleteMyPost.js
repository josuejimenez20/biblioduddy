import axios from 'axios';

export const deletMyPost = async (postId) => {

    try {

        const result = await axios.delete(`http://localhost:3000/api/v1/post/${postId}`);

        return result

    } catch (error) {
        return {
            status: 404,
            message: 'Ususario no encontrado'
        };
    }

}