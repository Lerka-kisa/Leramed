const jwt = require("jsonwebtoken");

const {accessKey, refreshKey} = require("../security/jwtKeys");
class TokenService{
    generateTokens (payload) {
        const accessToken = jwt.sign( payload, accessKey, {expiresIn: "1h"})
        const refreshToken = jwt.sign( payload, refreshKey, {expiresIn: "30d"})
        return {accessToken, refreshToken}
    }

    validateAccessToken(token){
        try{
            const userData = jwt.verify(token, accessKey)
            console.log(userData)
            return userData
        }catch (e) {
            return null
        }
    }

    validateRefreshToken(token){
        try{
            const userData = jwt.verify(token, refreshKey)
            return userData
        } catch (e) {
            return null
        }
    }

}

module.exports = new TokenService()