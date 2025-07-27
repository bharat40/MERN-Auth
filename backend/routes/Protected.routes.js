import express from 'express';
import { accessProtected } from '../controllers/Protected.controller.js';
import authenticateToken from '../middleware/authMiddleware.js';
const router = express.Router();


router.get('/protected', authenticateToken, accessProtected);


export default router;