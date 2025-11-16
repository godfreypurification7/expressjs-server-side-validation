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

//name, email, password, DOB
//api/register


// https://www.youtube.com/watch?v=JCgxEs2lUDo&list=PLgH5QX0i9K3r6ZGeyFnSv_YDxVON2P85m&index=34 12.00
// https://express-validator.github.io/docs/