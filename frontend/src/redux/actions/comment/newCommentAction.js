import axios from 'axios';
import { BIBLIOBUDDY_ENV } from '../test_env';

export const newCommentAction = async (dataPost) => {

    try {

        const result = await axios.post(`${BIBLIOBUDDY_ENV}comment/new`, dataPost);
        
        return result

    } catch (error) {
        return error;
    }

}