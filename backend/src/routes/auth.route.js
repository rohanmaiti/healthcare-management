import express from 'express';
import { handle_login, handle_signup, check, logout } from '../controllers/auth.controller.js';
import { checkAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/v1/login', handle_login);
router.post('/v1/signup', handle_signup);
router.post('/v1/logout', logout);
router.get('/v1/check', checkAuth, check);


export default router;