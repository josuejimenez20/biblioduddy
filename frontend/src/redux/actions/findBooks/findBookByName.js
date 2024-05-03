import axios from 'axios';

export const findBooksByName = async (bookName) => {

    const bookWord = bookName.split(' ').join('+');

    console.log(bookWord);

    // try {
    //     const items = await axios.post(`https://www.googleapis.com/books/v1/volumes?q=${bookWord}&key=AIzaSyC5q3DDM6cNpV-d1j2dmaXEyah-wNzCIGE`);

    //     console.log(items);
        
    //     return items

    // } catch (error) {
    //     return error;
    // }

}