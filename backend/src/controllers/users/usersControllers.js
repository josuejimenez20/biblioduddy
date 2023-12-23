const { loginUserService,
    createNewUserService } = require('../../services/users/usersServices')

const createNewUserController = async (req, res) => {

    try {

        const userData = req.body;

        const result = await createNewUserService(userData);

        return res.status(200).json({
            message: "User Created"
        })

    } catch (error) {
        console.log(error);
        return res.statur(500).json({
            message: "Error to create user"
        })
    }
}

const loginUserController = async (req, res) => {
    try {

        const userData = req.body;
        console.log(userData);

        const result = await loginUserService(userData);
        console.log(result);

        if (result.length === 0)
            return res.status(401).json({
                message: "User did not find"
            })

        return res.status(200).json({
            data: result
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error to login user'
        })
    }
}


module.exports = {
    createNewUserController,
    loginUserController
}