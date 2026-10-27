# CodeAlpha_EcommerceStore 🛍️

A full-stack, responsive modern E-Commerce web application built for the **CodeAlpha Full Stack Web Development Internship** (Task 1).

![Tech Stack](https://img.shields.io/badge/Stack-Node.js%20%7C%20Express%20%7C%20HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue)
![Deployment](https://img.shields.io/badge/Deployment-Vercel%20Ready-black)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 Project Overview
**AuraStore** is a feature-rich, high-performance e-commerce platform engineered according to the CodeAlpha internship specifications. It incorporates both client-side interactivity and a robust backend REST API architecture designed to run seamlessly in local environments or serverless platforms such as Vercel.

### ✨ Implemented Features
- **Product Catalog & Details**:
  - Live product listing with high-resolution imagery, ratings, specs, and pricing.
  - Interactive "Quick View" / Product details modal with full technical specifications and stock indicators.
- **Filtering & Search**:
  - Multi-category pill filtering (Electronics, Audio, Wearables, Peripherals, Accessories).
  - Real-time search query filtering.
  - Dynamic sorting by Price (Low to High, High to Low) and Customer Rating.
- **Interactive Shopping Cart**:
  - Slide-over drawer with item increment/decrement, remove, and subtotal calculation.
  - Real-time dynamic cart badge count in navbar.
  - Coupon discount system (Use code: `ALPHA10` for 10% off).
- **Order Processing & Simulation**:
  - Multi-step checkout flow with customer contact and address validation.
  - Simulated payment options (Credit Card, Cash on Delivery).
  - Instant order receipt generation with unique tracking IDs (`ORD-XXXXXX`).
  - Order history tracking modal.
- **User Authentication**:
  - Sign In and Sign Up modal with form validation.
  - Session persistence and dynamic user greeting in header.
- **RESTful API Backend**:
  - `/api/products` - Get products with category, search, and sorting query parameters.
  - `/api/products/:id` - Fetch single product specifications.
  - `/api/categories` - Fetch all unique categories.
  - `/api/auth/register` & `/api/auth/login` - Secure user registration & authentication.
  - `/api/orders` - Place and retrieve orders.

---

## 🛠️ Technology Stack
- **Frontend**: HTML5, Modern CSS3 (CSS Variables, Flexbox, CSS Grid), Vanilla JavaScript (ES6+ async/await, Fetch API)
- **Backend**: Node.js, Express.js
- **Database Layer**: In-memory + JSON store with localStorage synchronization for serverless persistence
- **Hosting / Deployment**: Configured for Vercel Serverless Functions (`vercel.json`)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/SelvaKailashS/CodeAlpha_EcommerceStore.git
cd CodeAlpha_EcommerceStore
npm install
```

### 2. Run the Application
```bash
npm start
```
Visit `http://localhost:3000` in your web browser.

---

## ☁️ Deploying to Vercel
This repository is pre-configured with `vercel.json` for zero-configuration deployment:
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and select `CodeAlpha_EcommerceStore`.
4. Click **Deploy**. Vercel will automatically build the static assets and serverless `/api` endpoints!

---

## 👨‍💻 Author
**Selva Kailash S**  
- GitHub: [@SelvaKailashS](https://github.com/SelvaKailashS)  
- Internship: CodeAlpha Full Stack Web Development
