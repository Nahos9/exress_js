import { PokemonModel } from "../db/sequelise.js"

export const deletePokemon =(app)=>{
    app.delete('/api/pokemons/:id',(req,res)=>{

      PokemonModel.findByPk(req.params.id)
        .then(pokemon=>{
            const pokemonDestroy = pokemon
            PokemonModel.destroy({where :{id:pokemon.id}})
            const message = `Le pokemon avec l'indentifiant ${pokemon.id} a été supprimmé`
            res.json({message,dat:pokemonDestroy})
        })
    })
}