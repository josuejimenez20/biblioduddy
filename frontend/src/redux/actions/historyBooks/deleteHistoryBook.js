import axios from 'axios';
import { BIBLIOBUDDY_ENV } from '../test_env';

export const deleteHistoryBook = ({ bookId }) => async (dispatch) => {

    try {
        const { data, status } = await axios.delete(`${BIBLIOBUDDY_ENV}history/delete/${bookId}`);
        return;
    } catch (error) {
    }
}