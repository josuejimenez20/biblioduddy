const { loginUserModel } = require('../../models/userModels/userModels')
const { createNewUserModel } = require('../../models/userModels/userModels');
const { v4 } = require('uuid');

const loginUserService = async (userData) => {
    try {

        const result = await loginUserModel(userData)

        return result;

    } catch (error) {
        return error;
    }
}

const createNewUserService = async (userData) => {
    try {

        const userId = v4();
        userData.userId = userId;

        const result = await createNewUserModel(userData)

        return result;

    } catch (error) {
        return error;
    }
}


module.exports = {
    loginUserService,
    createNewUserService
}