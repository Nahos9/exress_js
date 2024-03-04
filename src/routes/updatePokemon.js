import { authMidelwere } from "../auth/auth_midelwere.js"
import { PokemonModel } from "../db/sequelise.js"

export const updatePokemon = (app)=>{
    app.put('/api/pokemons/:id',authMidelwere,(req,res)=>{
        const id = req.params.id
        PokemonModel.update(req.body,{
            where : {id:id}
        }).then(_=>{
          return PokemonModel.findByPk(id)
            .then(pokemon=>{
                if(pokemon === null){
                    const message = "Le pokemon n'existe pas!!"
                    res.status(404).json({message})
                }
                let message = `Le pokemon ${pokemon.name} a bien été modifié!!`
                res.json({message,data:pokemon})
            })
        })
        .catch(error=>{
            if(error instanceof ValidationError){
                return res.status(400).json({message : error.message,data:error})
              }
            const message = "Le pokemon n'a pas pu être modifié!!"
            res.status(500).json({message,data:error})
        })
    })
}