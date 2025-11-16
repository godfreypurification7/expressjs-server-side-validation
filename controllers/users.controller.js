const { validationResult } = require('express-validator');  // <-- REQUIRED

const registeredUser = async (req, res) => {
    try {
        const { name, email, password, dob } = req.body;
        const newUser = {
            name, email, password, dob
        }
        res.status(201).json({
            message: "User is created",
            newUser
        });
    }
    catch (err) {
        return res.json({
            message: err.message
        });
    }
};

const loginUser = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        if (email === 'sopan@gmail.com' &&
            password === "Sopan123") {
            res.status(201).json({
                message: "User is loggedIn",
            });
        } else {
            res.status(400).json({
                message: "Invalid email/password",
            });
        }
    }
    catch (err) {
        return res.json({
            message: err.message
        });
    }
};
module.exports = { registeredUser, loginUser };