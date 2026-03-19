// Importando o service
import userService from "../services/userService.js";
// Importando o JWT (ciração de token)
import jwt from "jsonwebtoken";
// Segredo para gerar o toekn da API
const JWTSecret = "thegames-secret"

// Função para caastrar um usuário
const createUser = async(req, res) => {
    try {
        const {name, email, password} = req.body
        await userService.Create(name, email, password);
        res.status(201).json({ message: "Usuário cadastrado com sucesso!" })
    } catch(err) {
        console.log(err)
        res.status(500).json({error: "Não foi possível cadastrar o usuário. Erro interno do servidor."})
    }
}

// Função para AUTENTICAR um usuário (Função de Login)
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Se o email existe
        if (email != undefined) {
            // Buscando o usuário no banco
            const user = await userService.getOne(email)
            // verifica se o usuario foi encontrado
            if (user != undefined) {
                // Ve se a senha ta correta
                if(user.password == password) {
                    // CRIAR O TOKEN
                    jwt.sign({ id : user._id, email: user.email }, JWTSecret, {expiresIn: "48h"}, (error, token) => {
                        if (err) {
                            res.status(400).json({ error: "Não possível gerar o token de autenticação"})
                        } else {
                            res.status(200).json({token: token, message: "Login realizado com sucesso"})
                        }
                    })
                }
            }
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({ error: "Não foi possível realizar o login. Erro interno no servidor." })
    }
}

export default { createUser, loginUser }