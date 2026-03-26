import express from 'express'; // importa
import mongoose from 'mongoose';

const app = express(); // carrega em uma variável

// importando o módulo
import Game from "./models/Games.js"

// Importando o model de usuários
import User from './models/Users.js';

// importando routes
import gameRoutes from './routes/gameRoutes.js';

// importando rotas do usuario
import userRoutes from './routes/userRoutes.js';

// ativando a utilização das rotas


// configurações do express
app.use(express.json()) //  Permite o uso de JSON na aplicação

// ativando a utilização das rotas

app.use("/", gameRoutes)
app.use("/", userRoutes)


// Iniciando conexão com o banco de dados mongodb
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games-novo")

// criando rotas
// app.get("/", (req,res) => {

//     const games = [
//         {
//             title: "Game 1",
//             year: "2020",
//             platform: "PC",
//             price: 20
//         },
//         {
//             title: "Game 2",
//             year: "2024",
//             platform: "Xbox",
//             price: 30
//         },
//     ]
//     res.status(200).json(games)

    // res.status(200).json({"message" : "API rodando com sucesso!"}) // pra retornar um JSON na resposta
// });

// rodando a API na porta 4000

const port = 4000

app.listen(port, (error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log(`API rodando em http://localhost:${port}`)
    }
})

