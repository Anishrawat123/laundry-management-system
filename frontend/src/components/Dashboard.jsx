import { useEffect, useState } from "react";
import { getDashboard } from "../api";

export default function Dashboard(){
    const[data,setData] = useState({});

    useEffect(() =>{
        getDashboard().then(res=>setData(res.data));
    }, []);

    
      return (
  <div className="mt-4 p-5 bg-white rounded-xl shadow border">
    <h2 className="text-xl font-bold mb-2">Dashboard</h2>

    <p className="text-gray-700">Total Orders: {data.totalOrders}</p>
    <p className="text-gray-700">Total Revenue: ₹{data.totalRevenue}</p>
  </div>
);

}