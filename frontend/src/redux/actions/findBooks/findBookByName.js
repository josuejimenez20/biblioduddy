import axios from 'axios';
import { BIBLIOBUDDY_ENV } from '../test_env';

export const findBooksByName = async (bookName) => {

    const bookWord = bookName.split(' ').join('+');

    try {
        const { data } = await axios.get(`${BIBLIOBUDDY_ENV}volumes?q=${bookWord}&key=AIzaSyC5q3DDM6cNpV-d1j2dmaXEyah-wNzCIGE`);

        return data.items

    } catch (error) {
        return error;
    }

}