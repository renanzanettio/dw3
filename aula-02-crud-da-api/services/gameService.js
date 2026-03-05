// Importando o Model
import Game from "../models/Games.js"
class gameService {
    // Método (serviço) para buscar todos os registros no banco
    // funções asíncronas são não bloqueantes
    async getAll() {
        // try trata o sucesso
        try {
            // .find() -> é método do mongoose para buscar registros no banco
            const games = await Game.find()
            return games
            // catch trata a falha    
        } catch (error) {
            console.log(error)
        }
    }

    // Método para cadastrar um Game
    async Create(title, plataform, year, price) {
        try{
            const newGame = new Game({
                // Desestruturação (title : title)
                title,
                plataform,
                year,
                price
            })
            await newGame.save() // .save() método do Mongoose para cadastrar no BD.
        } catch(err) {
            console.log(err);
        }
    }

    //MÉTODO PARA EXCLUIR UM JOGO
    async Delete(id){
        try {
            // Excluindo o jogo pela ID
            await Game.findByIdAndDelete(id)
            console.log(`Game com a id: ${id} foi deletado.`)
        } catch(err) {
            console.log(err)
        }
    }

    //MÉTODO PARA ALTERAR UM JOGO
    async Update(id, title, plataform, year, price) {
        try{
            await Game.findByIdAndUpdate(id, {
                title, 
                plataform,
                year,
                price
            })
            console.log(` O jogo com o ID ${id} foi alterado.`)
        } catch(err) {
            console.log(err)
        }
    }
}
// Exportando a classe
export default new gameService()