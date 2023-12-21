const { createNewUserModel } = require('../../models/userModels/userModels');

const createNewUserController = async (req, res) => {

    try {

        const result = await createNewUserModel({});

        return res.status(200).json({
            message: result
        })
    } catch (error) {
        return res.statur(500).json({
            message: "Error to create user"
        })
    }
}


module.exports = {
    createNewUserController
}