// // PROGRAM : 1
// const http = require("http");

// const server =http.createServer((req, res) => {
//     if(req.method=== 'GET' && req.url==='/het'){

// res.writeHead(200,{'Content-Type':'text/plain'}) 
// res.end("Hello Everyone:!!");
// }else{
//     res.writeHead(404,{'Content-Type': "text/plan"})
//     res.end("Not Found");
// }      
// });

// server.listen(7000,()=>{
//     console.log("Server is running on http://localhost:7000")
// })
// -----------------------------------------------------------------------

// <----===PROGRAM : 2===---->

// import dotenv from "dotenv";
// //import http from "http";
// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import mongoose from "mongoose";
// dotenv.config();

// const port=process.env.PORT=7000;
// //const url=process.env.MONGOOSE_URL;
// //const url = "mongodb://127.0.0.1:27017/db";
// const url = "mongodb://127.0.0.1:27017/";
// console.log(url);
// const app =express();
// const __filename=fileURLToPath(import.meta.url);
// const __dirname=path.dirname(__filename);

// // ,{useNewUrlParser:true,useUnifiedTopology:true}
// mongoose.connect(url) 
//     .then(()=>{app.listen(port,()=>{
//         console.log(`Server is running on http://localhost:${port}`);
//     })}
        
//     )
//     .catch((err)=>console.error("Connection Failed",err))

// app.use(express.static(path.join(__dirname,"portfolio")))

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"portfolio","ex1.html"))
// })
// -----------------------------------------------------------------------
// PROGRAM : 3

// import dotenv from "dotenv";
// import express from 'express';
// import bodyparser from 'body-parser' ;             
// import mongoose from "mongoose";
// import route from './routes/userRoute.js' 

// dotenv.config();
// import User from './models/userModels.js';

// const app=express();
// const port=process.env.PORT;
// const url=process.env.MONGOOSE_URL;

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:false}));
// // ,{useNewUrlParser:true,useUnifiedTopology:true})
// mongoose.connect(url)
//     .then(()=>{
        
//         app.listen(port,()=>{
//         console.log(`Server is running on http://localhost:${port}`);
//     })}
        
//     )
//     .catch((err)=>console.error("Connection Failed",err))

//     async function create_User()
//     {
//         const user = new User({   
//             name:"Het Dabhi",
//             email:"hetdabhi2@gmail.com",
//             password:"10092004",
//             age:20
//              });
//              const result = await user.save();
//              console.log("User Created :",result);
//     }
//     create_User();
// -----------------------------------------------------------------------

// Program  2 & 3 (Merged Code):

// import dotenv from "dotenv";
// import express from 'express';
// import bodyParser from 'body-parser';  // Corrected the import name
// import mongoose from "mongoose";
// import route from './routes/userRoute.js' 
// import path from 'path';
// import { fileURLToPath } from 'url';
// import User from './models/userModels.js';  // Assuming this is the user schema file

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 7000;  // Default to 7000 if not provided in .env
// const url = process.env.MONGOOSE_URL;  // Ensure your .env has the correct MONGOOSE_URL

// // Middleware to parse request bodies
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Static file serving (e.g., serving HTML files)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, "portfolio")));  // Assuming you have a "portfolio" folder

// // MongoDB connection
// mongoose.connect(url)
//   .then(() => {
//     console.log("DB connected successfully");
//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });
//   })
//   .catch((err) => console.error("Connection Failed", err));

// // Route to serve an HTML file
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "portfolio", "ex1.html"));  // Serve ex1.html from the portfolio directory
// });

// // Function to create a user
// async function createUser() {
//   try {
//     const user = new User({
//       name: "Het Dabhi",
//       email: "hetdabhi2@gmail.com",
//       password: "10092004",  // Ideally, hash the password before storing it
//       age: 20
//     });
//     const result = await user.save();
//     console.log("User Created:", result);
//   } catch (error) {
//     console.error("Error creating user:", error);
//   }
// }

// // Call the function to create a user
// createUser();

//  -----------------------------------------------------------------------
/// PROGRAM : 4
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './routes/userRoute.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGO_URL;

// Built-in body parsing middleware (replaces body-parser)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log the PORT to verify
console.log(`Port: ${PORT}`);

// Basic GET Route
app.get("/", (req, res) => {
  res.send("Hello");
});

// Connect to MongoDB
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("DB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Connection Failed:", err);
  });

// Use routes middleware
app.use('/api', route);
