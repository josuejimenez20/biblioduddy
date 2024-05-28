import axios from 'axios';
import { BIBLIOBUDDY_ENV } from '../test_env';

export const newPost = async (postData) => {

    try {

        const result = await axios.post(`${BIBLIOBUDDY_ENV}post/new`, postData);
        return result

    } catch (error) {
        return {
            status: 404,
            message: 'Ususario no encontrado'
        };
    }

}