const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'product name must be provided']
        },
        price:{
            type:Number,
            required:[true,'product price must be provided']
        },
        featured:{
            type:Boolean,
            default:false
        },
        rating:{
            type:Number,
            default:4.5
        },
        createdAT:{
            type:Date,
            default:Date.now()
        },
        company:{
            type:String,
            // enum:['ikea','liddy','caressa','marcos']
            enum:{
                values: ['ikea','liddy','caressa','marcos'],
                message: '{VALUE} is not supported'
            }
        }
    }
)



module.exports = mongoose.model('Product', productSchema);


// All objects in js have a constructor function -> its prototype has methods

// Date -> constructor function -> Date.now() -> Date.prototype.now(); --> this is casted by mongoose -> same for other types

// {}, class -> fake, constructor function any obejct in javescript->  TYPE, Class static methods in js is basically prototype method in js of that constructor