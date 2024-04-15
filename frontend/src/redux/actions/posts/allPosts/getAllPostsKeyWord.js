import axios from 'axios';

export const getAllPostsKeyWord = async (keyWord) => {

    try {

        const { data } = await axios.get(`http://localhost:3000/api/v1/post/search/${keyWord}`);

        return data.data

    } catch (error) {
        return {
            status: 404,
            message: 'Ususario no encontrado'
        };
    }

}