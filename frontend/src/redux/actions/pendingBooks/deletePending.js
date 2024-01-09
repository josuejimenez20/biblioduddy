import axios from 'axios';

export const deletePendingBook = ({ bookId }) => async (dispatch) => {

    try {
        const { data, status } = await axios.delete(`http://localhost:3000/api/v1/pending/delete/${bookId}`);
        return;
    } catch (error) {
    }
}