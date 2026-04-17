const mongose = require('mongoose');

const orderSchema = new mongose.Schema({
    estimatedDelivery:Date,
    customerName:String,
     phone:String,
     items:[{
        name:String,
        quantity:Number,
        price:Number
     }
    ],
    total:Number,
    status:{
        type:String,
        enum:["RECEIVED", "PROCESSING","READY","DELIVERED"],
        default:"RECEIVED"
    }
},{
    timestamps:true
});

module.exports = mongose.model("Order",orderSchema);