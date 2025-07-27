import express from 'express';
const router = express.Router();
import authenticateToken from '../middleware/authMiddleware.js';
import { loginUser, logoutUser, registerUser, userProfile } from '../controllers/User.controllers.js';


router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/profile', authenticateToken, userProfile);

export default router;