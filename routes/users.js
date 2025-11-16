const express = require('express');
const { body, validationResult } = require('express-validator');
const { runValidation } = require('../validation/index');
const { registeredUser, loginUser, loginHandler } = require('../controllers/users.controller');
const { userRegistrationValidator, userLoggInValidator } = require('../validation/auth');
const userRoutes = express.Router();

userRoutes.post("/register/",
    userRegistrationValidator,
    runValidation,
    registeredUser
);

userRoutes.post("/login/",
    userLoggInValidator,
    runValidation,
    loginUser

);
module.exports = userRoutes;