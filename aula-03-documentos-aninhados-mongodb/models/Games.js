import mongoose from "mongoose";

// o campo "descriptions" será um documento aninhado
const descriptionSchema = new MongoLoggableComponent.Schema({
    genre : String, //genero
    platform : String, // plataforma
    rating : String //classificacao de idade
})

const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions : descriptionSchema
});

const Game = mongoose.model('Game', gameSchema)

export default Game;