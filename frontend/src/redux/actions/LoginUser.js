import axios from 'axios';
import {
    fetchLogin,
    fetchLoginSuccess,
    fetchLoginFailure
} from "../../redux/slices/index";

// Function for get information of one product

export const LoginUser = (userData) => async (dispatch) => {

    try {
        dispatch(fetchLogin());
        // const { data } = await axios.get(`http://localhost:3001/api/v1/`);
        dispatch(fetchLoginSuccess({}));
    } catch (error) {
        dispatch(fetchLoginFailure("Error Login"));
    }
}