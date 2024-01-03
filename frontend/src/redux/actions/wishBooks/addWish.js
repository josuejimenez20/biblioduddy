import axios from 'axios';
import {
    fetchAddBook,
    fetchAddBookFailure,
    fetchAddBookSuccess
} from "../../slices/wishBooks/addBookSlice";

export const addWishBook = (bookData) => async (dispatch) => {

    try {
        dispatch(fetchAddBook());
        const { data, status } = await axios.post(`http://localhost:3000/api/v1/wish/new`, bookData);

        if (status === 200) {
            return dispatch(fetchAddBookSuccess(true));
        }
        
        return fetchAddBookFailure(data.message);
    } catch (error) {
        dispatch(fetchAddBookFailure("Error Login"));
    }
}