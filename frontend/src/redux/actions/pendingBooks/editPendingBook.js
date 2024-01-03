import axios from 'axios';
import {
    fetchEditBook,
    fetchEditBookSuccess,
    fetchEditBookFailure
} from "../../slices/pendingBooks/editBookSlice";

export const editPendingBook = (bookData) => async (dispatch) => {

    try {
        dispatch(fetchEditBook());
        const { data, status } = await axios.post(`http://localhost:3000/api/v1/pending/edit`, bookData);

        if (status === 200) {
            return dispatch(fetchEditBookSuccess(true));
        }

        return fetchEditBookFailure(data.message);
    } catch (error) {
        dispatch(fetchEditBookFailure("Error to edit book"));
    }
}