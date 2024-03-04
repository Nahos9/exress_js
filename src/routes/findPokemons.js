import { PokemonModel } from "../db/sequelise.js"
import {Op} from 'sequelize'

export const findAllPokemon = (app) => {
    app.get('/api/pokemons',(req,res)=>{
        const name = req.query.name
        if(req.query.name){
            if(name.length < 2){
                const msg = "ce champ doit avoir au moins de caractères"
                res.status(400).json({msg})
            }
            const limite  = parseInt(req.query.limit) || 5
            PokemonModel.findAndCountAll({
                where : {
                name:{[Op.like]: `%${name}%`}
            },
            order : ['name']
            ,limit:limite
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