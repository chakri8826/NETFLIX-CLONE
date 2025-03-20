import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';

export const generateTokenAndSetCookie = (userid, res) => {
    const token = jwt.sign({ userid }, ENV_VARS.JWT_SECRET, { expiresIn: "100y" });

    // Clearer maxAge calculation for 100 years
    const maxAge = 100 * 365 * 24 * 60 * 60 * 1000; // 100 years in milliseconds

    res.cookie("jwt-netflix", token, {
        maxAge, // 100 years
        httpOnly: true, // Prevents XSS attacks (not accessible by JavaScript)
        sameSite: 'strict', // Prevents CSRF (sent only on same-site requests)
        secure: ENV_VARS.NODE_ENV !== "development", // Only sent over HTTPS in production
        path: "/", // Ensures cookie is accessible from all routes
    });

    return token;
};