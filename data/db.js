const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Load initial products
let products = [];
try {
  const rawData = fs.readFileSync(path.join(__dirname, 'products.json'), 'utf8');
  products = JSON.parse(rawData);
} catch (err) {
  console.warn('Warning: Could not read products.json from disk, using fallback empty array');
  products = [];
}

// In-memory data structures (safe across serverless calls with warm instances)
let users = [
  {
    id: "user-1",
    name: "Demo Customer",
    email: "demo@codealpha.com",
    // simple hash of 'password123'
    passwordHash: crypto.createHash('sha256').update('password123').digest('hex'),
    createdAt: new Date().toISOString()
  }
];

let orders = [
  {
    id: "ORD-94821",
    userId: "user-1",
    customer: {
      name: "Demo Customer",
      email: "demo@codealpha.com",
      phone: "+1 (555) 019-2834",
      address: "742 Evergreen Terrace, Springfield, OR"
    },
    items: [
      {
        id: "prod-1",
        name: "Sony WH-1000XM5 Wireless Headphones",
        price: 349.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80"
      }
    ],
    summary: {
      subtotal: 349.99,
      shipping: 0,
      tax: 28.00,
      total: 377.99
    },
    paymentMethod: "Credit Card (ending 4242)",
    status: "Processing",
    date: new Date(Date.now() - 86400000 * 2).toISOString()
  }
];

const hashPassword = (pw) => crypto.createHash('sha256').update(pw).digest('hex');

module.exports = {
  // Products
  getProducts: ({ category, search, sort }) => {
    let result = [...products];
    if (category && category !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    if (sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    return result;
  },

  getProductById: (id) => {
    return products.find(p => p.id === id) || null;
  },

  getCategories: () => {
    const set = new Set(products.map(p => p.category));
    return ['All', ...Array.from(set)];
  },

  // Users & Auth
  registerUser: ({ name, email, password }) => {
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      throw new Error('User already exists with this email.');
    }
    const newUser = {
      id: 'usr_' + Date.now(),
      name,
      email: email.toLowerCase(),
      passwordHash: hashPassword(password),
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    return { id: newUser.id, name: newUser.name, email: newUser.email };
  },

  loginUser: ({ email, password }) => {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user || user.passwordHash !== hashPassword(password)) {
      throw new Error('Invalid email or password.');
    }
    // Simple demo token
    const token = 'tok_' + Buffer.from(`${user.id}:${Date.now()}`).toString('base64');
    return {
      token,
      user: { id: user.id, name: user.name, email: user.email }
    };
  },

  getUserById: (id) => {
    const user = users.find(u => u.id === id);
    if (!user) return null;
    return { id: user.id, name: user.name, email: user.email };
  },

  // Orders
  createOrder: (orderData) => {
    const newOrder = {
      id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
      ...orderData,
      status: 'Confirmed',
      date: new Date().toISOString()
    };
    orders.unshift(newOrder);
    return newOrder;
  },

  getOrdersByUser: (userId) => {
    if (!userId) return orders;
    return orders.filter(o => o.userId === userId);
  },

  getOrderById: (orderId) => {
    return orders.find(o => o.id === orderId) || null;
  }
};
