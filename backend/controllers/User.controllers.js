import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from "../models/User.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: true,
                message: `User with email ${email} already exists`
            })
        }
        const hashedPassword = await bcrypt.hash(password, 5);
        const newUser = await new UserModel({ username, email, password: hashedPassword });
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
        if (!(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({
                success: false,
                message: "Wrong password"
            })
        }

        const token = jwt.sign({ userID: user._id, username: user.username }, process.env.SECRET_KEY, { expiresIn: '10m' });
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 10 * 60 * 1000
        })
        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token,
            data: {
                id: user._id,
                username: user.username,
                email: user.email
            }
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