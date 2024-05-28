import axios from 'axios';
import {
    fetchgetBooksFailure,
    fetchgetBooksSuccess,
    fetchgetBooks
} from "../../slices/historyBooks/getBooksSlices";
import { BIBLIOBUDDY_ENV } from '../test_env';

export const getHistoryBooks = (userId) => async (dispatch) => {

    try {
        dispatch(fetchgetBooks());
        const { data, status } = await axios.get(`${BIBLIOBUDDY_ENV}history/${userId}`);

        if (status === 200) {
            return dispatch(fetchgetBooksSuccess(data.data));
        }

        return fetchgetBooksFailure(data.message);
    } catch (error) {
        dispatch(fetchgetBooksFailure("Error To Get Books"));
    }
}