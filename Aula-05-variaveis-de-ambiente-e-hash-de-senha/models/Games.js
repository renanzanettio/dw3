import mongoose from "mongoose";

// o campo "descriptions" será um documento aninhado
const descriptionSchema = new mongoose.Schema({
    genre: String, //genero
    platform: String, //plataforma
    rating: String // clasificação de idade
})

const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions : descriptionSchema
    // definindo o campo com array
    // descriptions: [descriptionSchema]
})

const Game = mongoose.model('Game', gameSchema) // nome da coleção que eu quero criar no meu banco ('Game')

export default Game;