import express from "express";
import mongoose from "mongoose";
import Game from './models/Games.js'

const app = express();

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/api-the-games")

app.get("/", (req, res) => {
    const games = [
        {
            title: "Game 1",
            year: "2020",
            plataform: "PC",
            price: 20
        },
        {
            title: "Game 2",
            year: "2024",
            plataform: "PC",
            price: 20
        },
    ]
    res.status(200).json(games)
});



const port = 4000;
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`API rodando em http://localhost:${port}`)
    }
})