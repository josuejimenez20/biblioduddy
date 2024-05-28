import axios from 'axios';
import {
    fetchAddBook,
    fetchAddBookFailure,
    fetchAddBookSuccess
} from "../../slices/pendingBooks/addBookSlice";
import { BIBLIOBUDDY_ENV } from '../test_env';

export const addPendingBook = (bookData) => async (dispatch) => {

    try {
        dispatch(fetchAddBook());
        const { data, status } = await axios.post(`${BIBLIOBUDDY_ENV}pending/new`, bookData);

        if (status === 200) {
            return dispatch(fetchAddBookSuccess(true));
        }
        
        return fetchAddBookFailure(data.message);
    } catch (error) {
        dispatch(fetchAddBookFailure("Error Login"));
    }
}