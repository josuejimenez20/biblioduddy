import axios from 'axios';
import {
    fetchgetBooksFailure,
    fetchgetBooksSuccess,
    fetchgetBooks
} from "../../slices/historyBooks/getBooksSlices";

export const getHistoryBooks = (userId) => async (dispatch) => {

    try {
        dispatch(fetchgetBooks());
        const { data, status } = await axios.get(`http://localhost:3000/api/v1/history/${userId}`);

        if (status === 200) {
            return dispatch(fetchgetBooksSuccess(data.data));
        }

        return fetchgetBooksFailure(data.message);
    } catch (error) {
        dispatch(fetchgetBooksFailure("Error To Get Books"));
    }
}