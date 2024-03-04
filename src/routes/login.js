import bcrypt from 'bcrypt'
import { userModel } from '../db/sequelise.js'
import { TokenSigner } from'jsontokens'
import { privateKey } from '../auth/private_key.js'
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
            //const rawPrivateKey = '278a5de700e29faae8e40e366ec5012b5ec63d36ec77e8a2417154cc1d25383f'
            const tokenPayload = {"iat": 1440713414.85,"user_id":userExist.id}
            const token = new TokenSigner('ES256K', privateKey).sign(tokenPayload)
            const msg = "Cool!!"
            res.status(201).json({msg,data:token})
        })
       }).catch(error=>{
        const msg = "Utilisateur non trouvé!!"
        res.status(500).json({msg,data:error})
       })
    })
}