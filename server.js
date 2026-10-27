const path = require('path');
const express = require('express');
const app = require('./api/app');

// Serve static frontend files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route for SPA / direct navigation
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'Endpoint not found' });
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🛍️ CodeAlpha E-commerce Store Server Running`);
  console.log(`🚀 URL: http://localhost:${PORT}`);
  console.log(`📦 API: http://localhost:${PORT}/api/products`);
  console.log(`===============================================`);
});
