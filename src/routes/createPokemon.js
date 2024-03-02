import { UniqueConstraintError, ValidationError } from "sequelize"
import { PokemonModel } from "../db/sequelise.js"


export const createPokemon =(app)=>{
    app.post('/api/pokemons',(req,res)=>{
        PokemonModel.create(req.body)
        .then(data=>{
            const message = 'pokemon crée avec success!!'
            res.json({message,data})
        }).catch(error=>{
            if(error instanceof ValidationError){
              return res.status(400).json({message : error.message,data:error})
            }
            if(error instanceof UniqueConstraintError){
                res.status(400).json({message:error.message})
            }
            const message = "Le pokemon n'a pas pu eêtre ajouté "
            res.status(500).json({message,data:error})
        })
    })
}