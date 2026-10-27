const express = require('express');
const cors = require('cors');
const db = require('../data/db');

const app = express();

app.use(cors());
app.use(express.json());

// ----------------- Product Routes -----------------
app.get('/api/products', (req, res) => {
  try {
    const { category, search, sort } = req.query;
    const products = db.getProducts({ category, search, sort });
    res.json({ success: true, count: products.length, products });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/products/:id', (req, res) => {
  try {
    const product = db.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/categories', (req, res) => {
  try {
    const categories = db.getCategories();
    res.json({ success: true, categories });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ----------------- Auth Routes -----------------
app.post('/api/auth/register', (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, error: 'Name, email, and password are required.' });
    }
    if (password.length < 6) {
      return res.status(400).json({ success: false, error: 'Password must be at least 6 characters.' });
    }
    const user = db.registerUser({ name, email, password });
    res.status(201).json({ success: true, message: 'Registration successful', user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password are required.' });
    }
    const result = db.loginUser({ email, password });
    res.json({ success: true, message: 'Login successful', ...result });
  } catch (err) {
    res.status(401).json({ success: false, error: err.message });
  }
});

// ----------------- Order Routes -----------------
app.post('/api/orders', (req, res) => {
  try {
    const { items, customer, summary, paymentMethod, userId } = req.body;
    if (!items || !items.length) {
      return res.status(400).json({ success: false, error: 'Order must contain at least one item.' });
    }
    if (!customer || !customer.name || !customer.address) {
      return res.status(400).json({ success: false, error: 'Shipping details are incomplete.' });
    }
    const order = db.createOrder({ items, customer, summary, paymentMethod, userId });
    res.status(201).json({ success: true, message: 'Order placed successfully', order });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/orders', (req, res) => {
  try {
    const userId = req.query.userId;
    const orders = db.getOrdersByUser(userId);
    res.json({ success: true, orders });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/orders/:id', (req, res) => {
  try {
    const order = db.getOrderById(req.params.id);
    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found.' });
    }
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

module.exports = app;
