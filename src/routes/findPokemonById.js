import { PokemonModel } from "../db/sequelise.js"

export const findPokemonById = (app) =>{
    app.get('/api/pokemons/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        PokemonModel.findByPk(id)
        .then(pokemon=>{
            const message = 'Le pokemon a bien été recupéré!!'
            res.json({message,pokemon})
        })
    })
}