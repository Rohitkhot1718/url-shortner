import express from 'express'
import URL from "../models/url.model.js";
import User from '../models/user.model.js';

const router = express.Router()

router.get('/url', async(req, res) =>{
    if(!req.user) return res.redirect('signin')
    const urls = await URL.find({createdBy : req.user._id});
    return res.render('index', { urls, user : req.user});
})

router.get('/',(req, res) =>{
    return res.render('home', {user : req.user})
})

router.get('/signup',(_, res) =>{
    return res.render('signup')
})

router.get('/signin', (_, res) => {
    return res.render('signin', {field: null, errorMessage: null, commonError:null});
});


export default router
