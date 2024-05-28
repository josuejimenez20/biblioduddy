import axios from 'axios';
import { BIBLIOBUDDY_ENV } from '../../test_env';

export const getAllPostsAction = async () => {

    try {

        const { data } = await axios.get(`${BIBLIOBUDDY_ENV}post/all`);

        return data.posts

    } catch (error) {
        return {
            status: 404,
            message: 'Ususario no encontrado'
        };
    }

}