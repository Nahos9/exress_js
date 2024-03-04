import express from 'express'
import bodyParser from 'body-parser'
import { initDB } from './db/sequelise.js'
import { findAllPokemon } from './routes/findPokemons.js'
import { findPokemonById } from './routes/findPokemonById.js'
import { createPokemon } from './routes/createPokemon.js'
import { updatePokemon } from './routes/updatePokemon.js'
import { deletePokemon } from './routes/deletePokemon.js'
import { login } from './routes/login.js'

const app = express()
const port = process.env.PORT || 3000


//initialise la base de données
initDB()

//On crée une instance de notre model Pokemon


//on pouuse notre model afin de créer une table

//midelweres
app
.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.json('Hello, Heroku!!')
})
//nos differents endpoints
findAllPokemon(app)
findPokemonById(app)
createPokemon(app)
updatePokemon(app)
deletePokemon(app)
//login
login(app)

app.use(({res}) => {
    const message ="Imossible d'acceder à la ressource demandée, vérifiez l'URL"
    res.status(404).json({message})
})
app.listen(port,(error)=>{
    if(error){
        throw error
    }
    console.log(`Le serveur écoute sur http://localhost:${port}`)
})