import gameService from "../services/gameService";

//Função para tratar requisição de LISTAR os jogos
const getAllGames = async (req, res) => {
    try{
        const games = await gameService.getAll()
        res.status(200).json({games : games})
    } catch (err) {
        console.log(err);
        res.status(500).json({error : "Erro interno no servidor."})
    }
}

export default { getAllGames }