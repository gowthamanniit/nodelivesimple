import express from 'express'
import {create, deleteUser, getAllUsers, getUserById, update} from './UserController.js'
//const {create} = require("./UserController")


const route=express.Router();

route.post("/user",create)
route.get("/users",getAllUsers)
route.get("/user/:id",getUserById)
route.put("/user/update/:id",update)
route.delete("/user/delete/:id",deleteUser)

export default route
