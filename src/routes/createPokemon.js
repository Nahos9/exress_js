import { PokemonModel } from "../db/sequelise.js"

export const createPokemon =(app)=>{
    app.post('/api/pokemons',(req,res)=>{
        PokemonModel.create(req.body)
        .then(data=>{
            const message = 'pokemon crée avec success!!'
            res.json({message,data})
        })
    })
}