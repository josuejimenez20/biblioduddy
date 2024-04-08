import axios from 'axios';

export const getAllPostsByUserId = async (userId) => {

    try {

        const {data} = await axios.get(`http://localhost:3000/api/v1/post/all/${userId}`);
        
        return data

    } catch (error) {
        return {
            status: 404,
            message: 'Ususario no encontrado'
        };
    }

}