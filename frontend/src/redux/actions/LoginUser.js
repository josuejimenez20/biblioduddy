import axios from 'axios';
import {
    fetchLogin,
    fetchLoginSuccess,
    fetchLoginFailure
} from "../../redux/slices/index";

export const LoginUser = (userData) => async (dispatch) => {

    try {
        dispatch(fetchLogin());
        const { data, status, message } = await axios.post(`http://localhost:3000/api/v1/users/login`, userData);
        if (status === 200) {
            return dispatch(fetchLoginSuccess(data));
        }
        return fetchLoginFailure(message);
    } catch (error) {
        dispatch(fetchLoginFailure("Error Login"));
    }
}