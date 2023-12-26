import axios from 'axios';
import {
    fetchRegister,
    fetchRegisterSuccess,
    fetchRegisterFailure
} from "../../redux/slices/index";

// Function for get information of one product

export const RegisterUser = (userData) => async (dispatch) => {

    try {
        dispatch(fetchRegister());
        const response = await axios.post(`http://localhost:3000/api/v1/users/new`, userData);

        if (response.status === 200)
            return dispatch(fetchRegisterSuccess(true));

        dispatch(fetchRegisterFailure("Error Register, please intent again"));

    } catch (error) {
        dispatch(fetchRegisterFailure("Error Register, please intent again"));
    }
}