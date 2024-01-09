import axios from 'axios';

export const deleteWishBook = ({ bookId }) => async (dispatch) => {

    try {
        const { data, status } = await axios.delete(`http://localhost:3000/api/v1/wish/delete/${bookId}`);
        return;
    } catch (error) {
    }
}