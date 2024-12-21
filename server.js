const express = require("express");
const path = require("path");

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Login route
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "test@example.com" && password === "password") {
        res.redirect("/courses.html");
    } else {
        res.send("Invalid Login. <a href='/login.html'>Try Again</a>");
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
