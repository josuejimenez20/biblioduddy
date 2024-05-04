import axios from 'axios';

export const findBooksByName = async (bookName) => {

    const bookWord = bookName.split(' ').join('+');

    try {
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookWord}&key=AIzaSyC5q3DDM6cNpV-d1j2dmaXEyah-wNzCIGE`);

        return data.items

    } catch (error) {
        return error;
    }

}