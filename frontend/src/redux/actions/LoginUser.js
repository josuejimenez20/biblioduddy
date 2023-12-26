import axios from 'axios';
import {
    fetchLogin,
    fetchLoginSuccess,
    fetchLoginFailure
} from "../../redux/slices/index";

export const LoginUser = (userData) => async (dispatch) => {

    try {
        dispatch(fetchLogin());
        const response = await axios.post(`http://localhost:3000/api/v1/users/login`, userData);
        if (response.status === 200)
            return dispatch(fetchLoginSuccess(true));
        return fetchLoginFailure(response.message);
    } catch (error) {
        dispatch(fetchLoginFailure("Error Login"));
    }
}