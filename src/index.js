import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import {pokemons} from './db/data.js'
import { initDB } from './db/sequelise.js'

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




app.listen(port,(error)=>{
    if(error){
        throw error
    }
    console.log(`Le serveur écoute sur http://localhost:${port}`)
})