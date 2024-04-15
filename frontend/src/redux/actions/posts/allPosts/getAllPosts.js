import axios from 'axios';

export const getAllPostsAction = async () => {

    try {

        const { data } = await axios.get(`http://localhost:3000/api/v1/post/all`);

        return data.posts

    } catch (error) {
        return {
            status: 404,
            message: 'Ususario no encontrado'
        };
    }

}