import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Token not found in cookies"
            })
        }
        const verifiedUser = jwt.verify(token, process.env.SECRET_KEY)
        req.user = verifiedUser;
        next();
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: "Token is invalid or expired"
        });
    }
}

export default authenticateToken;