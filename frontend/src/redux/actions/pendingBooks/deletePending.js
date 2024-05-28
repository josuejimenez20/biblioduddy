import axios from 'axios';
import { BIBLIOBUDDY_ENV } from '../test_env';

export const deletePendingBook = ({ bookId }) => async (dispatch) => {

    try {
        const { data, status } = await axios.delete(`${BIBLIOBUDDY_ENV}pending/delete/${bookId}`);
        return;
    } catch (error) {
    }
}