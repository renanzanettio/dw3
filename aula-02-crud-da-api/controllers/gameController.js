// Importando o Service
import gameService from "../services/gameService.js";

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
const createGame = async(req, res) => {
    try{
        // Desestruturação
        // const title = req.body.title
        // Coletando os dados do corpo da requisição
        const {title, plataform, year, price} = req.body
        await gameService.Create(title, plataform, year, price)
        res.status(201).json({message: 'O jogo foi cadastrado com sucesso!'})
    }catch(err) {
        console.log(err)
        res.status(500).json({error: 'Erro interno do servidor. Não foi possível cadastrar o jogo'})
    }
}
export default { getAllGames, createGame }