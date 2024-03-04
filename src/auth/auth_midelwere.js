import {decodeToken} from 'jsontokens'
import { TokenVerifier } from 'jsontokens'

export function authMidelwere(req,res,next){

    const authorization = req.headers.authorization
    if(!authorization){
        const msg = "Vous n'avez pas fourni de token!!"
        return res.status(401).json({msg})
    }

    const token = authorization.split(' ')[1]
    const decodeData = decodeToken(token)
    const rawPublicKey = '03fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea5358479'
    const verified = new TokenVerifier('ES256K', rawPublicKey).verify(token)
    if(verified){
        console.log(decodeData)
        next()
    }
}