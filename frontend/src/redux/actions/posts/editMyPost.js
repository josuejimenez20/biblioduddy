import axios from 'axios';
import { BIBLIOBUDDY_ENV } from '../test_env';

export const editMyPost = async (postData) => {

    try {

        const result = await axios.post(`${BIBLIOBUDDY_ENV}post/update`, postData);
        
        return result

    } catch (error) {
        return {
            status: 500,
            message: 'No se pudp editar el post'
        };
    }

}