import express from 'express';
import gameController from '../controllers/gameController.js';
const gameRoutes = express.Router()

// Na camada de routes é armazenado os ENDPOINTS (URLs) da API

// Endpoint para listar todos os games
gameRoutes.get("/games", gameController.getAllGames)

// End point para cadastrar um game
gameRoutes.post("/games", gameController.createGame)

export default gameRoutes;