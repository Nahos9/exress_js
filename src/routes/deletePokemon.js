import { PokemonModel } from "../db/sequelise.js"

export const deletePokemon =(app)=>{
    app.delete('/api/pokemons/:id',(req,res)=>{

      PokemonModel.findByPk(req.params.id)
        .then(pokemon=>{
            if(pokemon === null){
                const message = "Le pokemon n'existe pas!!"
                res.status(404).json({message})
            }
            const pokemonDestroy = pokemon
           return PokemonModel.destroy({where :{id:pokemon.id}})
           .then(_=>{
            const message = `Le pokemon avec l'indentifiant ${pokemon.id} a été supprimmé`
            res.json({message,dat:pokemonDestroy})
           })
        })
        .catch(error=>{
            const message = `Le pokemon n'as pas pu être supprimmé`
            res.json({message,dat:error})
        })
    })
}