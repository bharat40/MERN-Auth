import express from 'express';
const router = express.Router();
import { loginUser, registerUser } from '../controllers/User.controllers.js';


router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;