import axios from 'axios';
import { BIBLIOBUDDY_ENV } from '../test_env';

export const getAllPostsByUserId = async (userId) => {

    try {

        const {data} = await axios.get(`${BIBLIOBUDDY_ENV}post/all/${userId}`);
        
        return data

    } catch (error) {
        return {
            status: 404,
            message: 'Ususario no encontrado'
        };
    }

}