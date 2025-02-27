class CustomAPIError extends Error{
    constructor(msg, statusCode){
        super(msg)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statuscode)=>{
    return new CustomAPIError(msg, statuscode);
}

module.exports = {createCustomError, CustomAPIError};