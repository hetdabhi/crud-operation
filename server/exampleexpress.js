//PROGRAM : 1
// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = 7000;

// // Serve static files (HTML, images, etc.) from the "portfolio" directory
// app.use(express.static(path.join(__dirname, 'portfolio')));

// app.get(['/', '/portfolio'], (req, res) => {
//     res.sendFile(path.join(__dirname, 'portfolio', 'ex1.html'));
// });

// app.use((req, res) => {
//     res.status(404).send('Not Found');  
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


//PROGRAM : 2
// import express from 'express';
// import path from 'path';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// app.use(express.json());

// const port = process.env.PORT || 7000;
// const secret = process.env.SECRET || '1234';

// // Middleware for authorization
// app.use((req, res, next) => {
//     req.isAuthorized = req.query.secret === secret;
//     next();
// });

// app.get("/", (req, res) => {
//     if (req.isAuthorized) {
//         res.sendFile(path.join(__dirname, "portfolio", "ex1.html"));
//     } else {
//         res.status(401).send("Unauthorized");
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


// PROGRAM : 3
// import dotenv from "dotenv";
// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";
// import mongoose from "mongoose";

// // Load environment variables from .env file
// dotenv.config();

// const port = process.env.PORT; // Port for the server
// const url = process.env.MONGOS_URL; // MongoDB connection URL
// console.log(url);

// const app = express();

// // Resolve __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Connect to MongoDB
// mongoose.connect(url)
//     .then(() => {
//         // Start the server after successful connection
//         app.listen(port, () => {
//             console.log(`Server is running on http://localhost:${port}`);
//         });
//     })
//     .catch((err) => console.error("Connection Failed", err));

// // Middleware to serve static files
// app.use(express.static(path.join(__dirname, "portfolio")));

// // Route to serve the ex1.html file
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "portfolio", "ex1.html"));
// });



