const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Kubernetes CI/CD</title>
            </head>
            <body>
                <h1>Kubernetes CI/CD Pipeline</h1>
                <p>Application is running successfully - Version 2.</p>
                <p>Node.js + Docker + Kubernetes + Jenkins</p>
            </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
});

