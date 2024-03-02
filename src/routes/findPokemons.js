import { PokemonModel } from "../db/sequelise.js"
import {Op} from 'sequelize'

export const findAllPokemon = (app) => {
    app.get('/api/pokemons',(req,res)=>{
        if(req.query.name){
            const name = req.query.name
            PokemonModel.findAndCountAll({
                where : {
                name:{[Op.like]: `%${name}%`}
            }
            ,limit:5
        }
            )
            .then(({count,rows})=>{
                const message=`Il y'a ${count} pokemons correponsdant ${name}`
                res.json({message,data:rows})
            })
        }else{
            PokemonModel.findAll()
            .then(data=>{
                let message = "La liste des pokemons"
                res.json({message,data})
            })
            .catch(error=>{
                const message = "Impossible d'afficher la liste des pokemons, reesseyez dans un instant"
                res.status(500).json({message,data:error})
            })
        }
       
    })

}