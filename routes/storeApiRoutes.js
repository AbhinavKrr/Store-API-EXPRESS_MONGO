const express = require('express');
storeAPIrouter = express.Router();

storeAPIrouter.route('/').get((req, res)=>{
    res.status(200).json({msg: "testing"});
});


module.exports = storeAPIrouter;