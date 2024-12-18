// import express from 'express';
// import { createUser, getAll, getOne, updateUser } from '../Controllers/userControllers.js';

// const router = express.Router();

// // Route for creating a user
// router.post('/create', createUser);

// // Route for getting all users
// router.get('/getall', getAll);

// // Route for getting a single user by ID
// router.get('/getone/:id', getOne);

// // Route for updating a user by ID
// router.put('/update/:id', updateUser);

import { createUser,getAll,findUserById,updateUser,DeleteUser } from "../Controllers/userControllers.js"; 
import express from "express"; // Express framework for routing

// Initialize a router object
const route = express.Router();

// Define a POST route for creating a user
route.post("/create", createUser);
route.get("/getall", getAll);
route.get("/finduser/:id",findUserById);
route.put("/update/:id",updateUser);
route.delete("/delete/:id",DeleteUser);
export default route;
