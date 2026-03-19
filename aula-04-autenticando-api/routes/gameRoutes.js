import express from 'express';
import gameController from '../controllers/gameController.js';
const gameRoutes = express.Router()

// Na camada de routes é armazenado os ENDPOINTS (URLs) da API

// Endpoint para listar todos os games
gameRoutes.get("/games", gameController.getAllGames)

// End point para cadastrar um game
gameRoutes.post("/games", gameController.createGame)

// End point para excluir um game
gameRoutes.delete("/games/:id", gameController.deleteGame)

// End point para editar um game
gameRoutes.put("/games/:id", gameController.updateGame)

// End point para listar um unico game
gameRoutes.get("/games/:id", gameController.getOneGame)

export default gameRoutes;