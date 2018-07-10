require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serve_favicon__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport_local__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport_local___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_passport_local__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_session__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_multer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_path__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_connect_flash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_connect_flash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_connect_flash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_passport__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_users__ = __webpack_require__(13);

const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();









const { SERV_PORT, DBurl } = process.env;




//connexion mongoose
__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connect(DBurl);
const db = __WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("MongoDB est là!");
});

//lien pug
app.set('views', __WEBPACK_IMPORTED_MODULE_8_path___default.a.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_8_path___default.a.join(__dirname, "public")));

app.use(__WEBPACK_IMPORTED_MODULE_3_volleyball___default.a);
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({
    extended: false
}));

app.use(__WEBPACK_IMPORTED_MODULE_6_express_session___default()({
    secret: 'JojoHelloFantasy',
    resave: true,
    saveUninitialized: false
}));

app.use('/', __WEBPACK_IMPORTED_MODULE_11__routes_users__["a" /* users */]);

app.listen(SERV_PORT, () => {
    console.log(`[APP working on port : ${SERV_PORT}]`);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return users; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(14);

const users = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();


users.get("/", (req, res) => {
    res.render('home', {
        title: "home"
    });
});

users.get("/about", (req, res) => {
    res.render('about', {
        title: "about"
    });
});

users.get("/profil", (req, res) => {
    res.render('profil', {
        title: "profil"
    });
});

users.get("/register", (req, res) => {
    res.render('register', {
        title: "register"
    });
});

users.post("/register", (req, res, next) => {
    const userData = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */](req.body);
    userData.save((err, user) => {
        if (err) {
            next(err);
        } else {
            req.session.userId = user._id; //pour express-session; quand on appelle quelqu'un, on appelle sa session
            console.log(user);
            res.redirect('/profil');
            next();
        }
    });
});

users.get("/login", (req, res, next) => {
    res.render('login', {
        title: "login"
    });
});

users.post('/login', (req, res, next) => {
    if (req.body.email && req.body.password) {
        __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */].authenticate(req.body.email, req.body.password, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/profil');
            }
        });
    } else {
        var err = new Error('Email and password are required.');
        err.status = 401;
        return next(err);
    }
});



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true
        //enlever les espaces dans les champs
    },
    //favbook:{
    //type: String,
    //require: true,
    //trim: true
    //}
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

//authenticate input

UserSchema.statics.authenticate = function (email, password, callback) {
    User.find({ email: email }).exec(function (error, user) {
        //une méthode mongodb, on va exécuter une fonction
        if (error) {
            console.log('erreur de base de données');
            return callback(error);
        } else if (!user) {
            var err = new Error('User not found.');
            console.log('utilisateur pas trouvé');
            err.status = 401;
            return callback(err);
        }

        console.log('pb mot de passe');
        console.log('password :' + password);
        console.log('user :' + user);
        //user = JSON.parse(JSON.stringify(user))[0];

        //console.log(x.property_actually_now_defined);
        //console.log('propriétés de user :' + Object.getOwnPropertyNames(user))
        //console.log('user.password :' + x.password)


        __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.compare(password, user.password, function (error, result) {
            //password (ce qu'on a ecrit dans le login) comparé avec user.password(ce qui se trouve dans la base de données)

            if (result === true) {
                //si on a bon
                return callback(null, user);
            } else {

                return callback();
            }
        });
    });
};

UserSchema.pre('save', function (next) {
    const user = this; //this= chaque instance du model
    console.log(this);
    __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.hash(user.password, 10, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', UserSchema);



/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map