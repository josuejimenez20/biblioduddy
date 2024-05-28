import axios from 'axios';
import {
    fetchAddBook,
    fetchAddBookFailure,
    fetchAddBookSuccess
} from "../../slices/wishBooks/addBookSlice";
import { BIBLIOBUDDY_ENV } from '../test_env';

export const addHistoryBook = (bookData) => async (dispatch) => {

    try {
        dispatch(fetchAddBook());
        const { data, status } = await axios.post(`${BIBLIOBUDDY_ENV}history/new`, bookData);

        if (status === 200) {
            return dispatch(fetchAddBookSuccess(true));
        }
        
        return fetchAddBookFailure(data.message);
    } catch (error) {
        dispatch(fetchAddBookFailure("Error Login"));
    }
}