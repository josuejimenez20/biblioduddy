import axios from 'axios';

export const newPost = async (postData) => {

    console.log(postData);

    try {

        const result = await axios.post(`http://localhost:3000/api/v1/post/new`, postData);
        return result

    } catch (error) {
        return {
            status: 404,
            message: 'Ususario no encontrado'
        };
    }

}