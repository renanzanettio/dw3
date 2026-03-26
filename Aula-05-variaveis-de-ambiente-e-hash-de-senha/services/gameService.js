// Importando o model
import Game from "../models/Games.js"

class gameService{
    // todos os métodos ficam dentro da classe
    // método (serviço) para buscar todos os registros no banco
    // funções assincronas são não bloqueantes
    async getAll(){
        // try trata o sucesso e catch o erro 
        try{
            // .find() -> método do mongoose paa buscar registros no banco
            const games = await Game.find()
            return games
        } catch(error) {
            console.log(error)
        }
    }

    // método para cadastrar um Game
    async Create(title, year, price, descriptions){
        // recebe as informações como parâmetros
        try{
            // usa a palavra new para criar uma instacia da classe game que ja existe
            const newGame = new Game({
                // DESESTRUTURAÇÃO, de colocar só titulo que ele tem que pegar o parametro e cadastrar ele, forma simplificada de (title : title)
                title,
                year,
                price,
                descriptions
            })
            // gravando no banco
            await newGame.save() // .save() -> método do mongoose para cadastrar no banco
            // await fica sempre antes da operação que será realizada no banco
        } catch (error){
            console.log(error)
        }
    }

    // MÉTODO PARA EXCLUIR UM JOGO
    async Delete(id){
        try{
            // excluindo o jogo pela ID
            await Game.findByIdAndDelete(id)
            console.log(`Game com a id: ${id} foi deletado.`)

        }catch(error){
            console.log(error)
        }
    }

    // método de alteração
    async Update(id, title, year, price, descriptions){
        try{
            const updatedGame = await Game.findByIdAndUpdate(id, { // grava o objeto nessa variavel updatedGame
                title,
                year,
                price,
                descriptions
            },
                { new: true} //é tipo um select, retorna o jogo que foi alterado
                // o método ja entende que ele tem que alterar e depois retorna o jogo com as informações alteradas
        )
            console.log(`O jogo com a ${id} foi alterado`)
            return updatedGame

        } catch(error){
            console.log(error)
        }
    }

    // Método para listar um jogo único
    async getOne(id) {
        try{
            const game = await Game.findOne({_id: id}) // o primeiro id é o que vem do mongo _id -> pela criação automática
            return game
        }catch(error){
            console.log(error)
        }
    }

}

// quando voce quer exportar uma classe voce utiliza new
// exportando classe
export default new gameService()