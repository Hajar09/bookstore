import express from "express"
const users = express.Router()
import {User} from "../models/user"

users.get("/", (req, res) => {
    res.render('home', {
        title:"home"
    })
})

users.get("/about", (req, res) => {
    res.render('about', {
        title:"about"
    })
})

users.get("/profil", (req, res) => {
    res.render('profil', {
        title:"profil"
    })
})

users.get("/register", (req, res) => {
    res.render('register', {
        title:"register"
    })
})

users.post("/register", (req, res, next) => {
    const userData = new User(req.body)
        userData.save((err, user) => {
            if(err) {
                next(err)
            }
            else {
                req.session.userId = user._id//pour express-session; quand on appelle quelqu'un, on appelle sa session
                console.log(user)
                res.redirect('/profil')
                next()
            }
        })
})

users.get("/login", (req, res, next) => {
    res.render('login', {
        title:"login"
    })
})

users.post('/login', (req, res, next) => {
    if(req.body.email && req.body.password) {
        User.authenticate(req.body.email, req.body.password, function (error, user) {
            if(error || !user) {
                var err = new Error('Wrong email or password');
                err.status = 401;
                return next(err)
                
            }
            else {
                req.session.userId = user._id;
                return res.redirect('/profil')
            }
        });
    }
    else {
        var err = new Error('Email and password are required.')
        err.status = 401;
        return next(err)
    }
})



export { users }