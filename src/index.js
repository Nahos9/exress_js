import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import {pokemons} from '../public/data.js'
import {giveId, response} from './helpers.js'
const app = express()
const port = 3000

app
.use(morgan('dev'))
.use(bodyParser.json())


app.get("/",(req,res)=>{
   res.send("Hello Express JS")
})
app.get("/api/pokemons/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon=>pokemon.id === id)
    if(pokemon == undefined){
        throw new Error("Pokemon non trouvé")
    }
    res.json(response("pokémon trouvé",pokemon))
})
app.get("/api/pokemons",(req,res)=>{
   res.json(response("La liste des pokémon a bien été retournée",pokemons))
})
app.post('/api/pokemons',(req,res)=>{
    const id = giveId(pokemons)
    console.log(req.body)
    const pokemon = {... req.body, ...{id:id,created_at: new Date()}}
    pokemons.push(pokemon)
    res.json(response("User crée avec success",pokemon))
})

app.put('/api/pokemons/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const pokemonUpdate = {... req.body,id:id}

    pokemons = pokemons.map((pokemon)=>{
        return pokemon.id === id ? pokemonUpdate:pokemon
    })

    res.json(response("pokemon updated!!",pokemonUpdate))
})

app.listen(port,(error)=>{
    if(error){
        throw error
    }
    console.log(`Le serveur écoute sur http://localhost:${port}`)
})