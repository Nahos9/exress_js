import bcrypt from 'bcrypt'
import { userModel } from '../db/sequelise.js'
export function login(app){

    app.post('/api/login',(req,res)=>{
       const user = userModel.findOne({where : {name: req.body.name}})
       .then(userExist=>{
        if(!userExist){
            const msg = 'Utilisateur baroul!!'
            res.status(400).json({msg})
        }
        bcrypt.compare(req.body.password,userExist.password)
        .then(passwordExist=>{
            if(!passwordExist){
                const msg = "Le mot de passe est incorrect!!"
                res.status(401).json({msg})
            }
            const msg = "Cool!!"
            res.status(201).json({msg})
        })
       }).catch(error=>{
        const msg = "Utilisateur non trouvé!!"
        res.status(500).json({msg,data:error})
       })
    })
}