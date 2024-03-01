import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import {pokemons} from './db/data.js'
import { initDB } from './db/sequelise.js'
import { findAllPokemon } from './routes/findPokemons.js'
import { findPokemonById } from './routes/findPokemonById.js'
import { createPokemon } from './routes/createPokemon.js'
import { updatePokemon } from './routes/updatePokemon.js'
import { deletePokemon } from './routes/deletePokemon.js'

const app = express()
const port = 3000

let copyPokemons = pokemons

//initialise la base de données
initDB()

//On crée une instance de notre model Pokemon


//on pouuse notre model afin de créer une table

//midelweres
app
.use(morgan('dev'))
.use(bodyParser.json())

//nos differents endpoints
findAllPokemon(app)
findPokemonById(app)
createPokemon(app)
updatePokemon(app)
deletePokemon(app)
app.listen(port,(error)=>{
    if(error){
        throw error
    }
    console.log(`Le serveur écoute sur http://localhost:${port}`)
})