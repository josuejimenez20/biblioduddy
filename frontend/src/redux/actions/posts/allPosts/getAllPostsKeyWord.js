import axios from 'axios';
import { BIBLIOBUDDY_ENV } from '../../test_env';

export const getAllPostsKeyWord = async (keyWord) => {

    try {

        const { data } = await axios.get(`${BIBLIOBUDDY_ENV}post/search/${keyWord}`);

        return data.data

    } catch (error) {
        return {
            status: 404,
            message: 'Ususario no encontrado'
        };
    }

}