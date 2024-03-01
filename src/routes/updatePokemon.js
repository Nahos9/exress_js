import { PokemonModel } from "../db/sequelise.js"

export const updatePokemon = (app)=>{
    app.put('/api/pokemons/:id',(req,res)=>{
        const id = req.params.id
        PokemonModel.update(req.body,{
            where : {id:id}
        }).then(_=>{
            PokemonModel.findByPk(id)
            .then(pokemon=>{
                let message = `Le pokemon ${pokemon.name} a bien été modifié!!`
                res.json({message,data:pokemon})
            })
        })
    })
}