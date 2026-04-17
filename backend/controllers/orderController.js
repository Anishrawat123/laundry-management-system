const Order = require('../models/orderModel.js');
    
// In-memory orders array
const orders = [];

// create Order 
const createOrder = async (req, res) => {
    const { customerName, phone, items,estimatedDelivery } = req.body;

    let total = 0;
    items.forEach(item => {
        total += item.quantity * item.price;
    });

    const newOrder = {
        id: Date.now(),
        customerName,
        phone,
        items,
        total,
        status: "RECEIVED",
        estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // 2 days from now
    };

    const order = await Order.create(newOrder);
    res.json(order);
};


// Get Orders
const getOrders = async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
};

//Update Status
const updateStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    if (!order) return res.status(404).json({ msg: "Order not Found" });

    res.json(order);
};

// Dashboard
const getDashboard = async (req, res) => {
    const orders = await Order.find();
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
    const statusCount = {};
    orders.forEach(o => {
        statusCount[o.status] = (statusCount[o.status] || 0) + 1;
    });


    res.json({
        totalOrders,
        totalRevenue,
        statusCount
    });

};

module.exports = {
    createOrder,
    getOrders,
    updateStatus,
    getDashboard
};

