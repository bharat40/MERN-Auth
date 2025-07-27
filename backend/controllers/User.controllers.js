// @desc    register user
// route    /api/auth/register
// access   public
import UserModel from "../models/User.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await new UserModel({ username, email, password });
        newUser.save();
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong"
        })
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: `User with email ${email} does not exists`
            })
        }
        if (user.password != password) {
            return res.status(400).json({
                success: false,
                message: "Wrong password"
            })
        }
        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: user
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

export {
    registerUser,
    loginUser
}