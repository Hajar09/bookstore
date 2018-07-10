import express from "express"
const app = express()
import "dotenv/config"
import favicon from "serve-favicon";
import volleyball from "volleyball"
import mongoose from "mongoose"
import {
    LocalStrategy
} from "passport-local";
import session from "express-session"
import multer from "multer";
import path from 'path'
import flash from "connect-flash";
const {SERV_PORT, DBurl} = process.env
import passport from "passport"

import {
    users
} from './routes/users';




//connexion mongoose
mongoose.connect(DBurl)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("MongoDB est là!")
});

//lien pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")))


app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))


app.use(session({
    secret: 'JojoHelloFantasy',
    resave: true,
    saveUninitialized: false
}))

app.use('/', users)

app.listen(SERV_PORT, ()=>{
    console.log(`[APP working on port : ${SERV_PORT}]`)
})