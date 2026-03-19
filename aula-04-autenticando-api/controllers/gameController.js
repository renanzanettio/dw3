// Importando o Service
import gameService from "../services/gameService.js";
import { ObjectId } from 'mongodb';

// Função para tratar a requisição de LISTAR os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({ games: games })
        // Cod. 200 (OK) : Requisição feita com seucesso
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor. Não foi possível listar os jogos' })
    }
}

// Função para tratar a requisição de CADASTRAR um jogo
const createGame = async (req, res) => {
    try {
        // Desestruturação
        // const title = req.body.title
        // Coletando os dados do corpo da requisição
        const { title, plataform, year, price } = req.body
        await gameService.Create(title, plataform, year, price)
        res.status(201).json({ message: 'O jogo foi cadastrado com sucesso!' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Erro interno do servidor. Não foi possível cadastrar o jogo' })
    }
}
// FUNÇÃO PARA DELETAR UM JOGO
const deleteGame = async (req, res) => {
    try {
        const id = req.params.id;
        if (ObjectId.isValid(id)) {
            await gameService.Delete(id)
            res.status(204).json({ message: 'O jogo foi excluido com sucesso!' })
            // Cod. 204 (NO CONTENT)
        } else {
            res.status(400).json({ error: 'Ocorreu um erro na validação do ID' })
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro interno do servidor' })
    }
}

//FUNÇÃO PARA ALTERAR UM JOGO
const updateGame = async (req, res) => {
    try {
        const id = req.params.id
        if (ObjectId.isValid(id)) {
            const { title, plataform, year, price } = req.body
            const game = await gameService.Update(id, title, plataform, year, price)
            res.status(200).json({ message: "Jogo atualizado com sucesso!", game: game })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Erro Interno no servidor." })
    }
}


// Função para Buscar um Jogo Único
const getOneGame = async (req, res) => {
    try {
        const id = req.params.id
        if (ObjectId.isValid(id)) {
            const game = await gameService.getOne(id)
            // Verificando se o jogo foi encontrado
            if (!game) { // Se o jogo não existir (! = NOT)
                res.status(404).json({ error: "O jogo buscado não foi encontrado." })
            } else {
                res.status(200).json({ game })
            }
        } else {
            res.status(400).json({ error: "A ID informada é inválida."})
        }
    } catch(err){
        console.log(err)
        res.status(500).json({error: "Erro interno do servidor."})
    }
}



export default { getAllGames, createGame, deleteGame, updateGame, getOneGame }
