import CreateOrder from "./components/CreateOrder.jsx"
import OrderList from "./components/Orderlist.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App(){
  return (
    <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-xl min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Laundary System</h1>

      <CreateOrder/>
      <Dashboard/>
      <OrderList/>
    </div>
  );
}

export default App
