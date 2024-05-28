import axios from 'axios';
import {
    fetchEditBook,
    fetchEditBookSuccess,
    fetchEditBookFailure
} from "../../slices/pendingBooks/editBookSlice";
import { BIBLIOBUDDY_ENV } from '../test_env';

export const editPendingBook = (bookData) => async (dispatch) => {

    try {
        dispatch(fetchEditBook());
        const { data, status } = await axios.post(`${BIBLIOBUDDY_ENV}pending/edit`, bookData);

        if (status === 200) {
            return dispatch(fetchEditBookSuccess(true));
        }

        return fetchEditBookFailure(data.message);
    } catch (error) {
        dispatch(fetchEditBookFailure("Error to edit book"));
    }
}