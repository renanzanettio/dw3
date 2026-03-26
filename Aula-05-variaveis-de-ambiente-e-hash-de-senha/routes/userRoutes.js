import express, { Router } from 'express'
import userController from '../controllers/userController.js'
import { model } from 'mongoose'

// importando o express para conseguir usar o
const userRoutes = express.Router()

// Endpoint para cadastrar um usuário
userRoutes.post("/users", userController.createUser)
userRoutes.post("/auth", userController.loginUser)


export default userRoutes