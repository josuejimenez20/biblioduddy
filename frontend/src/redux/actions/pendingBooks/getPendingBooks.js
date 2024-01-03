import axios from 'axios';
import {
    fetchgetBooksFailure,
    fetchgetBooksSuccess,
    fetchgetBooks
} from "../../slices/pendingBooks/getBookSlice";

export const getPendingBooks = (userId) => async (dispatch) => {

    try {
        dispatch(fetchgetBooks());
        const { data, status } = await axios.get(`http://localhost:3000/api/v1/pending/${userId}`);

        if (status === 200) {
            return dispatch(fetchgetBooksSuccess(data.data));
        }

        return fetchgetBooksFailure(data.message);
    } catch (error) {
        dispatch(fetchgetBooksFailure("Error To Get Books"));
    }
}