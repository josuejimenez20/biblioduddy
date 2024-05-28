import axios from 'axios';
import {
    fetchRegister,
    fetchRegisterSuccess,
    fetchRegisterFailure
} from "../../redux/slices/index";
import { BIBLIOBUDDY_ENV } from './test_env';

// Function for get information of one product

export const RegisterUser = (userData) => async (dispatch) => {

    try {
        dispatch(fetchRegister());
        const { data, status } = await axios.post(`${BIBLIOBUDDY_ENV}users/new`, userData);

        if (status === 200) {
            return dispatch(fetchRegisterSuccess(data));
        }

        dispatch(fetchRegisterFailure(data.message));

    } catch (error) {
        dispatch(fetchRegisterFailure(data.message));
    }
}