import axios from 'axios';
import { BIBLIOBUDDY_ENV } from '../test_env';


export const deletMyPost = async (postId) => {

    try {

        const result = await axios.delete(`${BIBLIOBUDDY_ENV}post/${postId}`);

        return result

    } catch (error) {
        return {
            status: 404,
            message: 'Ususario no encontrado'
        };
    }

}