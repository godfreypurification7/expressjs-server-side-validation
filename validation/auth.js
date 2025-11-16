const { check } = require("express-validator");

exports.userRegistrationValidator = [
    check("name")
        .trim()
        .notEmpty()
        .withMessage("Name is Missing")
        .isLength({ min: 5 })
        .withMessage("Name has to be atleast 5 character")
        .isLength({ max: 31 })
        .withMessage("Name has to be atleast  maximum 31 character"),
    check("email")
        .trim()
        .notEmpty()
        .withMessage("Email is Missing")
        .isEmail()
        .withMessage("Is not Valid Email"),
    check("password")
        .trim()
        .notEmpty()
        .withMessage("Password is Missing")
        .isLength({ min: 5 })
        .withMessage("Name has to be atleast 5 character"),
    check("dob")
        .trim()
        .notEmpty()
        .withMessage("Date of Birth is Missing")
        .isISO8601()
        .toDate()
        .withMessage("Not a valid Date of Birth")
];
exports.userLoggInValidator = [
    check("email")
        .trim()
        .notEmpty()
        .withMessage("Email is Missing")
        .isEmail()
        .withMessage("Is not Valid Email"),
    check("password")
        .trim()
        .notEmpty()
        .withMessage("Password is Missing")
        .isLength({ min: 5 })
        .withMessage("Name has to be atleast 5 character")
];