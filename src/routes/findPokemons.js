import { PokemonModel } from "../db/sequelise.js"

export const findAllPokemon = (app) => {
    app.get('/api/pokemons',(req,res)=>{
        PokemonModel.findAll()
        .then(data=>{
            let message = "La liste des pokemons"
            res.json({message,data})
        })
    })

}