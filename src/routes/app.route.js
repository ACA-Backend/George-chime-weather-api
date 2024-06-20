import { Router } from "express";
import { getAuthenticatedUser, login, register } from "../app/controllers/auth.controller.js";
import authMiddleware from "../app/middleware/auth.middleware.js";
// initialize application router
const router = Router();
// Auth Routes
router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/auth/user',authMiddleware, getAuthenticatedUser);

export const appRouter = router;