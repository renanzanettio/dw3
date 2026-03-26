// MIDDLEWARE DE AUTENTICAÇÃO

import jwt from 'jsonwebtoken'
import userController from '../controllers/userController.js'

// função para verficar a autenticação do usuário
// verificar se ele possui um token
const Authorization = (req,res,next) => {
    // capturar o token do usuario através do cabeçalho da requisição, (authorization é um campo que esta na header)
    const authToken = req.headers['authorization']
    // verificando se o token existe
    if(authToken != undefined){
        // split -> 
        // bearer -> token auportador -> fica armazenado no navegador, um token que o usuario precisa portar para entrar no navegador
        // bearer -> vira um vetor, e quando você captura, ele vem junto com uma string (bearer), ai corta no meio
        // a primeira posição do vetor vem com a string (bearer) e a segunda posição vem com o token
        const bearerToken = authToken.split(' ')
        const token = bearerToken[1]
        // verificando se o token é válido
        jwt.verify(token, userController.JWTSecret, (error,data) => {
            if(error){
                res.status(401).json({error: "Acesso não autorizado. Token Inválido"})
                // se o token for autorizado
            } else{
                req.token = token
                req.loggedUser = {
                    id: data.id,
                    email: data.email
                }
                // prosseguindo com a requisição
                next()
            }
        })
        // se o token não existir
    }else{
        res.status(401).json({error: "Acesso não autorizado, você não esta autenticado"})
    }
}

export default {Authorization}