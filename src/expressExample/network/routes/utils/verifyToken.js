const httpErrors  = require('http-errors')

const verifyToken = (req, res, next) => {
 
    const authorization = req.headers["authorization"];

    if (!authorization) 
        throw new httpErrors.Unauthorized('You are not allowed')

    const [ tokenType, token ] = authorization.split(' ')

    if (tokenType !== 'Bearer')
        throw new httpErrors.Unauthorized('You are not allowed')
    
    if (token == null) 
        throw new httpErrors.Unauthorized('You are not allowed')

    jwt.verify(token, process.env.SECRET, (err, user) => {      
        if (err) 
            return next(new httpErrors.NotFound('Token inválida'))
        req.user = user;
        next();
    })
}

module.exports = verifyToken