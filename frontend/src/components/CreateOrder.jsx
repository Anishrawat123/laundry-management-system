import React, { useState } from 'react'
import {createOrder} from "../api.js";

export default function CreateOrder(){
    const[name,setName] = useState("");
    const[phone,setPhone] = useState("");

    const handleSubmit = async()=>{
        const data = {
            customerName:name,
            phone,
            items:[
                {name:"Shirt",quantity:2,price:50}
            ],
            estimatedDelivery:new Date(Date.now() + 7*24*60*60*1000) // 7 days from now
        };
        await createOrder(data);
        alert("Order Created");
        window.location.reload();
    };
    
    return (
        <div className="p-5 bg-white shadow-lg rounded-xl border">
            <h2 className="text-xl font-bold mb-2">Create Order</h2>
            <input className="border p-2 w-full mb-2" placeholder="Customer Name" onChange={(e)=> setName(e.target.value)} />
            <input className="border p-2 w-full mb-2" placeholder="Phone" onChange={(e)=> setPhone(e.target.value)} />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg" onClick={handleSubmit}>Create</button>
            
        </div>
    );
}



