import { Sequelize,DataTypes } from "sequelize";
import { define } from "../models/pokemon.js";
import { pokemons } from "./data.js";

const  sequelize = new Sequelize(
    'pokedex',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mariadb',
        dialectOptions:{
            timezone:'Etc/GMT-2'
        },
        logging : false
    }
)

// sequelize.authenticate()
// .then(_=>console.log('connexion établie à la base de données'))
// .catch(error => console.error(`Impossible de se connecté ${error}`))

const pokemonModel = define(sequelize,DataTypes)

export const initDB =()=>{
    return sequelize.sync({force : true})
    .then(_=>{
        pokemons.map(pokemon => {
            pokemonModel.create({
                name:pokemon.name,
                type: pokemon.type.join()
            }).then(buzz => console.log(buzz.toJSON()))
        })
        console.log('Syncronisation établie avec success!!')
    })
}
