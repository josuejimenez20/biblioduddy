import axios from 'axios';
import { BIBLIOBUDDY_ENV } from '../test_env';


export const deleteCurrentlyBook = ({ bookId }) => async (dispatch) => {

    try {
        const { data, status } = await axios.delete(`${BIBLIOBUDDY_ENV}currenlty/delete/${bookId}`,);
        return;
    } catch (error) {
    }
}