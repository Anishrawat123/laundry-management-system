
import { useEffect, useState } from "react";
import { getOrders, updateStatus } from "../api";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const[loading,setLoading] = useState(true);

  const fetchOrders = async () => {
    setLoading(true);
    const res = await getOrders();
    setOrders(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text=center text-gray-500">Loading...</div>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Orders</h2>

      {/*  Search by Name or Phone */}
      <input
        className="border p-2 mb-3 w-full rounded"
        placeholder="Search by name or phone"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/*  Status Filter */}
      <select
        className="border p-2 mb-3 w-full rounded"
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="RECEIVED">RECEIVED</option>
        <option value="PROCESSING">PROCESSING</option>
        <option value="READY">READY</option>
        <option value="DELIVERED">DELIVERED</option>
      </select>

      {/* Orders List */}
      {orders
        .filter((o) =>
          o.customerName.toLowerCase().includes(search.toLowerCase()) ||
          o.phone.includes(search)
        )
        .filter((o) =>
          statusFilter ? o.status === statusFilter : true
        )
        .map((o) => (
          <div
            key={o._id}
            className="p-4 border rounded-xl shadow mb-3 bg-white"
          >
            <p className="font-bold text-lg">{o.customerName}</p>
            <p className="text-sm text-gray-500">Phone: {o.phone}</p>

            {/*  Items */}
            <div className="mt-2">
              {o.items.length === 0 && <p className="text-sm text-gray-500">No Orders Found</p>}
              {o.items.map((item, i) => (
                <p key={i} className="text-sm">
                  {item.name} - {item.quantity} x ₹{item.price}
                </p>
              ))}
            </div>

            {/* Total */}
            <p className="mt-2 font-semibold">Total: ₹{o.total}</p>
            <p className="text-sm text-blue-500">
              Delivery:{""}
              {o.estimatedDelivery
                ? new Date(o.estimatedDelivery).toLocaleDateString()
                : "Not Set"}
            </p>
           

            {/* Status Update */}
            <div className="mt-2 flex items-center gap-2">
              <span>Status:</span>

              <select
                className="border p-1 rounded"
                value={o.status}
                onChange={(e) =>
                  updateStatus(o._id, e.target.value).then(fetchOrders)
                }
              >
                <option>RECEIVED</option>
                <option>PROCESSING</option>
                <option>READY</option>
                <option>DELIVERED</option>
              </select>
            </div>
          </div>
        ))}
    </div>
  );
}