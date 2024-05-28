import axios from 'axios';
import { BIBLIOBUDDY_ENV } from '../test_env';

export const getPostById = async (postId) => {

    try {

        const result = await axios.get(`${BIBLIOBUDDY_ENV}post/${postId}`);

        return result.data.post[0]

    } catch (error) {
        return {
            status: 404,
            message: 'Ususario no encontrado'
        };
    }

}