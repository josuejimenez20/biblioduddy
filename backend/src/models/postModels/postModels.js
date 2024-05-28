const { queryToBiblioBuddySiteDB } = require('../../database/querieBiblioBuddy');

const createNewPostModel = async (userData) => {

    const { post_id, user_id,
        title, content, currentDate } = userData;

    const query = `
    
    INSERT INTO post(
        post_id, fk_user_id, title, content, publish_date, autor_name)
        VALUES ('${post_id}', '${user_id}', '${title}', '${content}', '${currentDate}', (
            SELECT CONCAT(name, ' ', lastname)
            FROM user_information 
            WHERE fk_user_id = '${user_id}'
            LIMIT 1
        ));
    `;

    try {
        const result = await queryToBiblioBuddySiteDB(query);
        return result;
    } catch (error) {
        return error;
    }
}

const updatePostModel = async (postData) => {

    const { post_id, title, content } = postData;

    const query = `
    
    UPDATE post
	SET title='${title}', content='${content}'
	WHERE post_id = '${post_id}';`;

    try {

        const result = await queryToBiblioBuddySiteDB(query);

        return result;
    } catch (error) {
        return error;
    }
}

const deletePostModel = async (postId) => {

    const query2 = `
    DELETE FROM comment
	WHERE fk_post_id = '${postId}';
    `;

    const query = `
    DELETE FROM post
	WHERE post_id = '${postId}';`;
    try {
        await queryToBiblioBuddySiteDB(query2);
        const result = await queryToBiblioBuddySiteDB(query);

        return result;

    } catch (error) {
        console.log(error);
        return error;
    }
}

const getAllPostsModel = async () => {

    const query = `
    SELECT * FROM post`;
    try {
        const result = await queryToBiblioBuddySiteDB(query);

        return result;

    } catch (error) {
        return error;
    }
}
const getPostByIdModel = async (postId) => {

    const query = `
    SELECT * 
    FROM post
    WHERE post_id = '${postId}'`;

    const query2 = `
    SELECT *, (SELECT name FROM user_information WHERE fk_user_id = com.fk_user_id) userName,
            (SELECT lastname FROM user_information WHERE fk_user_id = com.fk_user_id) userLastName
    FROM comment AS com
    WHERE com.fk_post_id = "${postId}";`;

    try {
        const result = await queryToBiblioBuddySiteDB(query);
        const comments = await queryToBiblioBuddySiteDB(query2);

        result[0].comments = comments;

        return result;

    } catch (error) {
        return error;
    }
}

const getAllPostsByIdModel = async (userId) => {

    const query = `
    SELECT * 
    FROM post
    WHERE fk_user_id = '${userId}'`;
    try {
        const result = await queryToBiblioBuddySiteDB(query);

        return result;

    } catch (error) {
        return error;
    }
}

const getPostsByKeyWordModel = async (keyWord) => {

    const query = `
    SELECT * 
    FROM post
    WHERE title LIKE '%${keyWord}%' 
    OR content LIKE '%${keyWord}%';
    `;
    try {
        const result = await queryToBiblioBuddySiteDB(query);

        return result;

    } catch (error) {
        return error;
    }
}

module.exports = {
    createNewPostModel,
    updatePostModel,
    deletePostModel,
    getAllPostsModel,
    getPostByIdModel,
    getAllPostsByIdModel,
    getPostsByKeyWordModel
}