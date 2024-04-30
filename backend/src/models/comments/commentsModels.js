const { queryToBiblioBuddySiteDB } = require('../../database/querieBiblioBuddy');

const createNewCommentModel = async (dataBook) => {

    const { commentId, userId, postId, comment } = dataBook;

    const query = `

    INSERT INTO comment (comment_id, fk_post_id, fk_user_id, comment)
    VALUES ("${commentId}","${postId}", "${userId}", "${comment}");  
        `;

    try {

        const result = await queryToBiblioBuddySiteDB(query);

        return result;
    } catch (error) {
        return error;
    }
}

const getCommentsByPostIdModel = async (postId) => {

    const query = `

    SELECT * FROM comment 
    WHERE fk_post_id = "${postId}" 
        `;

    try {

        const result = await queryToBiblioBuddySiteDB(query);

        return result;
    } catch (error) {
        return error;
    }
}

const updateCommentModel = async (dataComment) => {

    const { commentId, comment } = dataComment;
    const query = `

    UPDATE comment 
    SET comment = "${comment}" 
    WHERE comment_id = "${commentId}";
        `;

    try {

        const result = await queryToBiblioBuddySiteDB(query);

        return result;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createNewCommentModel,
    getCommentsByPostIdModel,
    updateCommentModel
}