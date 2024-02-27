const express = require('express')

const app = express()

app.get("/",(req,res)=>{
   res.json({
    message:"Hello express JS"
   })
})
app.listen(4000,(error)=>{
    if(error){
        throw error
    }
    console.log("Le serveur écoute sur le port 4000")
})