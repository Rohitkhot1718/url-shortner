import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { setUser } from '../services/auth.js'

export async function handleSignUp(req, res) {
    try {
        const { username, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({success: false, message: "User already exists" });

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        user = new User({ username, email, password: hashPassword });
        await user.save();
        res.redirect('/signin');

    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to Sign Up" });
    }
}

export async function handleSignIn(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        const isMatch = user ? await bcrypt.compare(password, user.password) : false;

        if (!user && !isMatch) 
            return res.render("signin", {commonError: "Invalid email and password",field: null,errorMessage: ""});

        if (!user) {
            return res.render("signin", {
                field: "email",
                errorMessage: "Invalid Email",
                commonError: null
            });
        }

        if (!isMatch) {
            return res.render("signin", {
                field: "password",
                errorMessage: "Invalid Password",
                commonError: null
            });
        }

        const token = setUser(user);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,  
            sameSite: "Strict"
        });

        return res.redirect('/url');

    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to Sign In" });
    }
}

export async function handleSignOut(req, res) {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,   
        sameSite: "Strict"
    });

    return res.redirect("/"); 
}