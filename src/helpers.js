export function response (message,data){
    return {message,data}
}
export function giveId(pokemos){
const pokemonId = pokemos.map(pokemon => pokemon.id)

const maxId = pokemonId.reduce((a,b) => Math.max(a,b))
const uniqueId = maxId + 1
return uniqueId
}