import Game from "../models/Games.js"

class gameService {
    // Metodo (Service) para buscar todos os jogos
    async getAll() {
        try{
            const games = await Game.find();
            return games;
        } catch (err) {
            console.log(err);
        }
    }




}

export default new gameService()