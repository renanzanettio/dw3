import express from 'express';
const userRoutes = express.Router()
import userController from "../controllers/userController.js"

// Endpoint para cadastrar o usuario
userRoutes.post("/user", userController.createUser)

// EndPoint para logar o usuario
userRoutes.post("/auth", userController.loginUser)

export default userRoutes;