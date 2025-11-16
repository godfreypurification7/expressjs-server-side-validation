const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');
const userRoutes = require('./routes/users');
const PORT = 4500;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", userRoutes);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
    res.send("<h1>Testing the server</h1>");
});

