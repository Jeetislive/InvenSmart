# 🚀 InvenSmart Backend

A robust backend system for managing electronics inventory efficiently, providing secure user roles, and tracking transactions. Built with **Node.js**, **Express.js**, **JWT Authorization**, **MySQL**, and **Redis** caching.

## 📑 Table of Contents
- [🔍 Overview](#-overview)
- [✨ Features](#-features)
- [⚙️ Tech Stack](#️-tech-stack)
- [🗂️ Database Schema](#-database-schema)
- [🛠️ REST API Endpoints](#️-rest-api-endpoints)
- [🔧 Setup and Installation](#-setup-and-installation)
- [📌 Usage](#-usage)
- [📜 License](#-license)

---

### 🔍 Overview
InvenSmart is an inventory management backend for managing electronics. It offers secure role-based APIs for inventory management, customer data, and transaction handling.

### ✨ Features
- **Product Management**: Add, update, delete products, view product list.
- **Category Management**: Organize and manage product categories.
- **Supplier Management**: Track suppliers for effective stock maintenance.
- **Customer Management**: Register customers and track purchases.
- **Transaction Management**: Record sales and generate reports.
- **Inventory Adjustments**: Track stock changes for discrepancies.
- **User Authentication**: Role-based access control for Admin and Staff.

### ⚙️ Tech Stack
- **Backend**: Node.js, Express.js
- **Authorization**: JWT
- **Database**: MySQL
- **Caching**: Redis

### 🗂️ Database Schema
Key tables:
- **Products**
- **Categories**
- **Suppliers**
- **Customers**
- **Transactions**
- **Inventory Adjustments**
- **Users** (Access Control)

### 🛠️ REST API Endpoints
1. **User Authentication**
   - `POST /api/register` - Register users
   - `POST /api/login` - User login with JWT

2. **Product Management**
   - `GET /api/products` - List products
   - `POST /api/products` - Add a product
   - `PUT /api/products/{id}` - Update product
   - `DELETE /api/products/{id}` - Delete product

3. **Category Management**
   - `GET /api/categories` - List categories
   - `POST /api/categories` - Add a category

4. **Supplier, Customer, Transaction Management** - Similar CRUD and retrieval endpoints.

### 🔧 Setup and Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/username/InvenSmart-backend.git
   cd InvenSmart-backend
