import axios from 'axios';

export const deleteCurrentlyBook = ({ bookId }) => async (dispatch) => {

    try {
        const { data, status } = await axios.delete(`http://localhost:3000/api/v1/currenlty/delete/${bookId}`,);
        return;
    } catch (error) {
    }
}