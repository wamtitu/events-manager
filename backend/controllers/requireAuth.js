const config  = require('../config');
const jwt = require('jsonwebtoken');

exports.requireAuth = (req, res, next)=>{
    if(req.headers && req.headers.authorization && req.headers.authorization.startsWith('JWT')){
        console.log(req.headers.authorization)
        jwt.verify(req.headers.authorization.split(' ')[1], config.JWT_SECRET, (err, decodedToken)=>{
            if(err){
                res.redirect("http://127.0.0.1:3000/users/login")
            }else{
                next()
            }
        })
    } else{
        res.redirect("http://127.0.0.1:3000/users/login");
        console.log('login to access events')
    }
}
