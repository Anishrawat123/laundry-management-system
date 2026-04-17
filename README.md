# 🧺 Laundry Management System

## 📌 Overview

This is a Mini Laundry Order Management System built using the MERN Stack.

It allows a dry cleaning store to create orders, track order status, calculate billing, and view basic dashboard insights.

---

## 🚀 Features Implemented

### 1. Create Order

* Customer Name
* Phone Number
* Garments (e.g., Shirt)
* Quantity & Price
* Automatic Total Bill Calculation
* Unique Order ID

### 2. Order Status Management

* RECEIVED
* PROCESSING
* READY
* DELIVERED
* Status can be updated via dropdown

### 3. View Orders

* List all orders
* Search by customer name or phone
* Filter orders by status

### 4. Dashboard

* Total Orders
* Total Revenue

---

## ⭐ Bonus Features

* React Frontend (Vite + Tailwind CSS)
* MongoDB Database Integration
* Search & Filter functionality
* Estimated Delivery Date

---

## 🛠 Tech Stack

* **Frontend:** React + Vite + Tailwind CSS
* **Backend:** Node.js + Express
* **Database:** MongoDB

---

## ⚙️ Setup Instructions

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🤖 AI Usage Report

### Tools Used

* ChatGPT
* GitHub Copilot

### Sample Prompts

* "Create REST API for laundry order system using Node.js and Express"
* "Build React UI for order list and dashboard"
* "Add search and filter functionality in React"

### Where AI Helped

* Generated initial backend API structure
* Helped create frontend components
* Assisted in debugging and fixing issues

### Issues Found in AI-Generated Code

* Missing estimated delivery date field
* Orders were not updating in real-time after creation
* UI structure was basic and not user-friendly

### Improvements Made by Me

* Added estimated delivery date feature
* Fixed real-time UI update using state refresh
* Implemented search and filter functionality
* Improved UI using Tailwind CSS
* Fixed bugs and optimized API calls

---

## ⚖️ Tradeoffs

* Authentication not implemented (kept project simple)
* UI kept minimal (focus on functionality over design)
* Deployment not done (runs locally)

---

## 📷 Demo

* Orders can be created and updated
* Dashboard reflects real-time data
* Search and filter functionality works properly

---

## ✅ Conclusion

This project demonstrates full-stack development skills and effective use of AI tools to rapidly build and improve a real-world application.
