import axios from 'axios';

export const deleteHistoryBook = ({ bookId }) => async (dispatch) => {

    try {
        const { data, status } = await axios.delete(`http://localhost:3000/api/v1/history/delete/${bookId}`);
        return;
    } catch (error) {
    }
}