const {CustomAPIError} = require('../errors/custom-error');

const errorHandlerMiddleware = (err, req, res, next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.msg})
    }

    return res.status(500).json({msg: "Something went Wrong"});
}

module.exports = errorHandlerMiddleware;