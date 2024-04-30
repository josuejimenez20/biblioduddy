import axios from 'axios';

export const newCommentAction = async (dataPost) => {

    try {

        const result = await axios.post(`http://localhost:3000/api/v1/comment/new`, dataPost);
        
        return result

    } catch (error) {
        return error;
    }

}