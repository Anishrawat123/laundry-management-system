import axios from 'axios';

const API = "http://localhost:5000/api";

export const createOrder = (data) => axios.post(`${API}/order`,data);
export const getOrders = () => axios.get(`${API}/orders`);
export const updateStatus = (id,status) => axios.patch(`${API}/order/${id}`,{status});
export const  getDashboard = () => axios.get(`${API}/dashboard/`);


