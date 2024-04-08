import axios from 'axios';

export const editMyPost = async (postData) => {

    try {

        const result = await axios.post(`http://localhost:3000/api/v1/post/update`, postData);
        
        return result

    } catch (error) {
        return {
            status: 500,
            message: 'No se pudp editar el post'
        };
    }

}