import axios from 'axios';
import { BIBLIOBUDDY_ENV } from '../test_env';

export const deleteWishBook = ({ bookId }) => async (dispatch) => {

    try {
        const { data, status } = await axios.delete(`${BIBLIOBUDDY_ENV}wish/delete/${bookId}`);
        return;
    } catch (error) {
    }
}