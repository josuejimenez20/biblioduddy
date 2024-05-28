import axios from 'axios';
import {
    fetchLogin,
    fetchLoginSuccess,
    fetchLoginFailure
} from "../../redux/slices/index";
import { BIBLIOBUDDY_ENV } from './test_env';

export const LoginUser = (userData) => async (dispatch) => {
    console.log(`${BIBLIOBUDDY_ENV}users/login`);

    try {
        dispatch(fetchLogin());
        const {status, data, message} = await axios.post(`${BIBLIOBUDDY_ENV}users/login`, userData);

        if (status === 200) {
            return dispatch(fetchLoginSuccess(data));
        }
        return fetchLoginFailure(message);
    } catch (error) {
        dispatch(fetchLoginFailure("Error Login"));
    }
}
