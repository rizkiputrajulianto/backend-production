const jwt = require("jsonwebtoken");

const createJWT = (user) => {
    delete user.dataValues.password;
    const token = jwt.sign({user: user.dataValues}, "private-key-user", {expiresIn: "24h"});
    return token;
};

const checkJwt = (req, res, next) => {
    const token = req.get("Authorization");
    if(!token) return res.status(401).json({msg:"Unauthorize"})
    else {
        jwt.verify(token, "private-key-user", (err, decode) => {
            if(err) return res.status(401).json({msg: error.toString})
            else{
                req.auth = decode.user;
                next();
            }
        })
    }
}

const checkJwtAdmin = (req, res, next) => {
    const token = req.get("Authorization");
    if(!token) return res.status(401).json({msg:"Unauthorize"})
    else {
        jwt.verify(token, "private-key-user", (err, decode) => {
            if(err) return res.status(401).json({msg: error.toString})
            else{
                const user = decode.user
                if (user.status === "Admin") {
                req.auth = user;
                next();
                } else{
                    return res.status(401).json({msg: "Sorry you are not an admin"})
                }
            }
        })
    }
}
module.exports = {createJWT, checkJwt, checkJwtAdmin}

//belom kelar, butuh nonton record pas review dlu baru dikelarin