import { authMidelwere } from "../auth/auth_midelwere.js"
import { PokemonModel } from "../db/sequelise.js"

export const findPokemonById = (app) =>{
    app.get('/api/pokemons/:id',authMidelwere,(req,res)=>{
        const id = parseInt(req.params.id)
        PokemonModel.findByPk(id)
        .then(pokemon=>{
            if(pokemon === null){
                const message = 'Le pokemon n\'existe pas!!'
                res.status(404).json({message})
            }
            const message = 'Le pokemon a bien été recupéré!!'
            res.json({message,pokemon})
        })
        .catch(error=>{
            const message ="le pokemon n'a pas pu être trouvé reesseyez dans un instant"
            res.status(404).json({message,data:error})
        })
    })
}