import { getUser } from '../services/auth.js';

export async function restrictSignIn(req, res, next) {
    try {
        const token = req.cookies?.token;

        if (!token) return res.redirect('/signin');

        const user = getUser(token);
        if (!user) {
            res.clearCookie('token');
            return res.redirect('/signin');
        }
        req.user = user;
        
        next();
    } catch (error) {
        res.clearCookie('token');
        return res.redirect('/signin');
    }
}

export async function checkAuth(req, res, next) {
    try {
        const token = req.cookies?.token;
        if (!token) {
            req.user = null;
            return next();
        }

        const user = getUser(token);
        if (!user) {
            res.clearCookie('token');
            req.user = null;
            return next();
        }

        req.user = user;
        next();
    } catch (error) {
        req.user = null;
        next();
    }
}
