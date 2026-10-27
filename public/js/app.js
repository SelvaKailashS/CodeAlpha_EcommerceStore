// AuraStore - CodeAlpha E-Commerce Application State
const state = {
  products: [],
  categories: ['All'],
  activeCategory: 'All',
  searchQuery: '',
  sortBy: 'default',
  cart: JSON.parse(localStorage.getItem('aurastore_cart') || '[]'),
  coupon: null, // { code: 'ALPHA10', discountPercent: 10 }
  user: JSON.parse(localStorage.getItem('aurastore_user') || 'null'),
  token: localStorage.getItem('aurastore_token') || null,
  orders: []
};

// Fallback initial products if API is not yet loaded
const fallbackProducts = [
  {
    id: "prod-1",
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "Electronics",
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviewsCount: 128,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    description: "Industry-leading noise cancellation optimized to you with two processors and 8 microphones. Exceptional sound quality engineered to perfection.",
    specs: {
      "Battery Life": "Up to 30 hours",
      "Connectivity": "Bluetooth 5.2 / 3.5mm Aux",
      "Weight": "250g",
      "Colors": "Silver, Black, Midnight Blue"
    },
    inStock: true
  },
  {
    id: "prod-2",
    name: "Apple Watch Series 9 GPS 45mm",
    category: "Wearables",
    price: 429.00,
    originalPrice: 459.00,
    rating: 4.9,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    description: "Powerful sensors for advanced health insights, double tap gesture interaction, and a brighter edge-to-edge Always-On Retina display.",
    specs: {
      "Display": "Always-On OLED",
      "Water Resistance": "50 meters",
      "Sensors": "ECG, Blood Oxygen, Temp",
      "Battery": "18 hours"
    },
    inStock: true
  },
  {
    id: "prod-3",
    name: "Keychron Q1 Pro Mechanical Keyboard",
    category: "Peripherals",
    price: 199.50,
    originalPrice: 220.00,
    rating: 4.7,
    reviewsCount: 94,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
    description: "Custom mechanical keyboard with full aluminum CNC machined body, QMK/VIA support, and wireless Bluetooth 5.1 capability.",
    specs: {
      "Switches": "Gateron Jupiter Red / Brown",
      "Connectivity": "Type-C & Bluetooth",
      "Hot-Swappable": "Yes",
      "Layout": "75% Compact"
    },
    inStock: true
  },
  {
    id: "prod-4",
    name: "Sony Alpha 7 IV Mirrorless Camera",
    category: "Electronics",
    price: 2498.00,
    originalPrice: 2699.00,
    rating: 4.9,
    reviewsCount: 67,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80",
    description: "Full-frame 33MP Exmor R back-illuminated CMOS sensor. 4K 60p 10-bit 4:2:2 recording with real-time Eye AF for humans, animals, and birds.",
    specs: {
      "Sensor": "33MP Full-Frame CMOS",
      "Video": "4K 60p 10-bit",
      "Mount": "Sony E-mount",
      "Stabilization": "5-axis IBIS"
    },
    inStock: true
  },
  {
    id: "prod-5",
    name: "Logitech MX Master 3S Wireless Mouse",
    category: "Peripherals",
    price: 99.99,
    originalPrice: 109.99,
    rating: 4.8,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80",
    description: "Quiet Clicks feel satisfying without disturbing your flow. 8K DPI track-on-glass optical sensor and MagSpeed electromagnetic scrolling.",
    specs: {
      "DPI": "200 - 8000 DPI",
      "Battery Life": "70 days on full charge",
      "Weight": "141g",
      "Multi-Device": "Pair up to 3 devices"
    },
    inStock: true
  },
  {
    id: "prod-6",
    name: "Bose SoundLink Flex Bluetooth Speaker",
    category: "Audio",
    price: 149.00,
    originalPrice: 169.00,
    rating: 4.6,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80",
    description: "Waterproof & dustproof portable outdoor speaker (IP67) featuring PositionIQ technology that automatically detects orientation to optimize audio.",
    specs: {
      "Waterproof Rating": "IP67 (Floating)",
      "Battery": "Up to 12 hours",
      "Charging": "USB-C",
      "Bluetooth": "4.2 (30 ft range)"
    },
    inStock: true
  },
  {
    id: "prod-7",
    name: "Minimalist Ceramic Coffee Mug Set",
    category: "Home & Lifestyle",
    price: 38.00,
    originalPrice: 45.00,
    rating: 4.5,
    reviewsCount: 58,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    description: "Handcrafted matte finish ceramic mugs designed for everyday warmth. Microwave and dishwasher safe with ergonomic grip.",
    specs: {
      "Capacity": "350 ml each",
      "Quantity": "Set of 2",
      "Material": "Stoneware Ceramic",
      "Care": "Dishwasher safe"
    },
    inStock: true
  },
  {
    id: "prod-8",
    name: "Canvas Travel Backpack 28L",
    category: "Accessories",
    price: 79.99,
    originalPrice: 99.00,
    rating: 4.7,
    reviewsCount: 86,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
    description: "Water-resistant waxed vintage canvas backpack with padded 16-inch laptop compartment, hidden passport pocket, and breathable back padding.",
    specs: {
      "Capacity": "28 Liters",
      "Laptop Fit": "Up to 16-inch MacBook Pro",
      "Material": "Waxed Canvas & Genuine Leather",
      "Weight": "1.1 kg"
    },
    inStock: true
  }
];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const categoriesContainer = document.getElementById('categoriesContainer');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const sortSelect = document.getElementById('sortSelect');
const cartBadge = document.getElementById('cartBadge');
const cartDrawer = document.getElementById('cartDrawer');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartCountHeader = document.getElementById('cartCountHeader');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartDiscount = document.getElementById('cartDiscount');
const cartTotal = document.getElementById('cartTotal');
const discountRow = document.getElementById('discountRow');
const toastContainer = document.getElementById('toastContainer');
const emptyState = document.getElementById('emptyState');

// Modals
const productModal = document.getElementById('productModal');
const productModalContent = document.getElementById('productModalContent');
const checkoutModal = document.getElementById('checkoutModal');
const orderSuccessModal = document.getElementById('orderSuccessModal');
const ordersModal = document.getElementById('ordersModal');
const authModal = document.getElementById('authModal');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  loadProducts();
  updateAuthUI();
  updateCartUI();
});

// ==================== API / DATA FETCHING ====================
async function loadProducts() {
  try {
    const params = new URLSearchParams();
    if (state.activeCategory && state.activeCategory !== 'All') params.append('category', state.activeCategory);
    if (state.searchQuery) params.append('search', state.searchQuery);
    if (state.sortBy && state.sortBy !== 'default') params.append('sort', state.sortBy);

    const res = await fetch(`/api/products?${params.toString()}`);
    if (!res.ok) throw new Error('API fetch failed');
    const data = await res.json();
    state.products = data.products || [];
  } catch (err) {
    console.warn('Backend API offline or unreachable, using local store:', err);
    // Filter local fallback products
    let list = [...fallbackProducts];
    if (state.activeCategory !== 'All') {
      list = list.filter(p => p.category.toLowerCase() === state.activeCategory.toLowerCase());
    }
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    if (state.sortBy === 'price-low') list.sort((a,b) => a.price - b.price);
    else if (state.sortBy === 'price-high') list.sort((a,b) => b.price - a.price);
    else if (state.sortBy === 'rating') list.sort((a,b) => b.rating - a.rating);
    state.products = list;
  }

  renderCategories();
  renderProducts();
}

// ==================== RENDERING ====================
function renderCategories() {
  const cats = ['All', ...new Set(fallbackProducts.map(p => p.category))];
  categoriesContainer.innerHTML = cats.map(cat => `
    <button class="cat-pill ${cat === state.activeCategory ? 'active' : ''}" data-category="${cat}">
      ${cat}
    </button>
  `).join('');

  categoriesContainer.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCategory = btn.dataset.category;
      loadProducts();
    });
  });
}

function renderProducts() {
  if (!state.products || state.products.length === 0) {
    productGrid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  productGrid.innerHTML = state.products.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="card-img-wrap" onclick="openProductModal('${p.id}')">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="category-tag">${p.category}</span>
      </div>
      <div class="card-body">
        <div class="card-rating">
          <i class="fa-solid fa-star"></i>
          <span>${p.rating}</span>
          <span class="reviews-count">(${p.reviewsCount} reviews)</span>
        </div>
        <h3 class="product-title" onclick="openProductModal('${p.id}')">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="card-footer">
          <div class="price-wrap">
            <span class="current-price">$${p.price.toFixed(2)}</span>
            ${p.originalPrice ? `<span class="original-price">$${p.originalPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="add-cart-btn" onclick="addToCart('${p.id}', 1)" title="Add to Cart">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ==================== PRODUCT DETAILS MODAL ====================
window.openProductModal = function(id) {
  const p = state.products.find(item => item.id === id) || fallbackProducts.find(item => item.id === id);
  if (!p) return;

  const specsRows = p.specs ? Object.entries(p.specs).map(([key, val]) => `
    <tr>
      <td>${key}</td>
      <td>${val}</td>
    </tr>
  `).join('') : '';

  productModalContent.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${p.image}" alt="${p.name}">
    </div>
    <div class="modal-details">
      <span class="category-tag" style="position:static; display:inline-block; margin-bottom:8px;">${p.category}</span>
      <h2>${p.name}</h2>
      <div class="card-rating" style="margin-bottom:12px;">
        <i class="fa-solid fa-star"></i>
        <span>${p.rating} / 5.0</span>
        <span class="reviews-count">(${p.reviewsCount} customer ratings)</span>
      </div>
      <div class="price-wrap" style="margin-bottom:16px;">
        <span class="current-price" style="font-size:1.8rem; color:var(--primary);">$${p.price.toFixed(2)}</span>
        ${p.originalPrice ? `<span class="original-price" style="font-size:1rem;">$${p.originalPrice.toFixed(2)}</span>` : ''}
      </div>
      <p style="color:var(--text-muted); margin-bottom:16px; font-size:0.95rem;">${p.description}</p>
      
      <h4>Product Specifications</h4>
      <table class="specs-table">
        <tbody>${specsRows}</tbody>
      </table>

      <div style="display:flex; gap:12px; align-items:center; margin-top:20px;">
        <div class="qty-control" style="margin:0;">
          <button class="qty-btn" id="modalQtyMinus">-</button>
          <span id="modalQtyVal" style="font-weight:700; width:28px; text-align:center;">1</span>
          <button class="qty-btn" id="modalQtyPlus">+</button>
        </div>
        <button class="btn btn-primary btn-block" id="modalAddToCartBtn">
          <i class="fa-solid fa-bag-shopping"></i> Add to Cart
        </button>
      </div>
    </div>
  `;

  let currentQty = 1;
  const qtyVal = document.getElementById('modalQtyVal');
  document.getElementById('modalQtyMinus').onclick = () => {
    if (currentQty > 1) { currentQty--; qtyVal.textContent = currentQty; }
  };
  document.getElementById('modalQtyPlus').onclick = () => {
    currentQty++; qtyVal.textContent = currentQty;
  };
  document.getElementById('modalAddToCartBtn').onclick = () => {
    addToCart(p.id, currentQty);
    closeAllModals();
  };

  productModal.classList.add('open');
};

// ==================== SHOPPING CART ====================
window.addToCart = function(productId, qty = 1) {
  const product = state.products.find(p => p.id === productId) || fallbackProducts.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to cart!`);
};

window.changeCartQty = function(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== id);
  }
  saveCart();
  updateCartUI();
};

window.removeFromCart = function(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart');
};

function saveCart() {
  localStorage.setItem('aurastore_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalCount;
  cartCountHeader.textContent = totalCount;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div style="text-align:center; padding: 48px 16px; color:var(--text-muted);">
        <i class="fa-solid fa-basket-shopping" style="font-size:3rem; margin-bottom:12px; color:var(--border);"></i>
        <h4>Your cart is empty</h4>
        <p style="font-size:0.85rem; margin-top:6px;">Add some gear to get started!</p>
      </div>
    `;
    cartSubtotal.textContent = '$0.00';
    cartTotal.textContent = '$0.00';
    discountRow.style.display = 'none';
    return;
  }

  cartItemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        <div class="qty-control">
          <button class="qty-btn" onclick="changeCartQty('${item.id}', -1)">-</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="changeCartQty('${item.id}', 1)">+</button>
          <span style="font-size:0.75rem; color:var(--text-muted); margin-left:6px;">($${item.price.toFixed(2)} ea)</span>
        </div>
      </div>
      <button class="remove-item-btn" onclick="removeFromCart('${item.id}')" title="Remove">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let discount = 0;
  if (state.coupon) {
    discount = (subtotal * state.coupon.discountPercent) / 100;
    discountRow.style.display = 'flex';
    cartDiscount.textContent = `-$${discount.toFixed(2)}`;
  } else {
    discountRow.style.display = 'none';
  }

  const total = Math.max(0, subtotal - discount);
  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// ==================== CHECKOUT & ORDER PROCESSING ====================
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty! Add products first.', 'error');
    return;
  }
  cartDrawer.classList.remove('open');
  
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = state.coupon ? (subtotal * state.coupon.discountPercent) / 100 : 0;
  const total = subtotal - discount;
  document.getElementById('checkoutFinalAmount').textContent = `$${total.toFixed(2)}`;

  if (state.user) {
    document.getElementById('custName').value = state.user.name || '';
    document.getElementById('custEmail').value = state.user.email || '';
  }

  checkoutModal.classList.add('open');
}

async function handleCheckoutSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('placeOrderBtn');
  const btnText = document.getElementById('placeOrderBtnText');
  btn.disabled = true;
  btnText.textContent = 'Processing Payment...';

  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = state.coupon ? (subtotal * state.coupon.discountPercent) / 100 : 0;
  const total = subtotal - discount;

  const orderPayload = {
    userId: state.user ? state.user.id : 'guest',
    customer: {
      name: document.getElementById('custName').value,
      email: document.getElementById('custEmail').value,
      phone: document.getElementById('custPhone').value,
      address: `${document.getElementById('custAddress').value}, ${document.getElementById('custCity').value} ${document.getElementById('custZip').value}`
    },
    items: [...state.cart],
    summary: {
      subtotal,
      discount,
      shipping: 0,
      total
    },
    paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value
  };

  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload)
    });

    let savedOrder;
    if (res.ok) {
      const data = await res.json();
      savedOrder = data.order;
    } else {
      // Local fallback order generation
      savedOrder = {
        id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
        ...orderPayload,
        status: 'Confirmed',
        date: new Date().toISOString()
      };
    }

    // Save to user's order history in localStorage
    const myOrders = JSON.parse(localStorage.getItem('aurastore_orders') || '[]');
    myOrders.unshift(savedOrder);
    localStorage.setItem('aurastore_orders', JSON.stringify(myOrders));

    // Clear cart
    state.cart = [];
    state.coupon = null;
    saveCart();
    updateCartUI();

    // Show Confirmation
    checkoutModal.classList.remove('open');
    renderSuccessReceipt(savedOrder);
    orderSuccessModal.classList.add('open');
  } catch (err) {
    showToast('Order processing error: ' + err.message, 'error');
  } finally {
    btn.disabled = false;
    btnText.textContent = 'Confirm & Place Order';
  }
}

function renderSuccessReceipt(order) {
  const receipt = document.getElementById('receiptSummary');
  receipt.innerHTML = `
    <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
      <strong>Order ID:</strong>
      <span style="color:var(--primary); font-weight:700;">${order.id}</span>
    </div>
    <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
      <strong>Customer:</strong>
      <span>${order.customer.name}</span>
    </div>
    <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
      <strong>Delivery To:</strong>
      <span>${order.customer.address}</span>
    </div>
    <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
      <strong>Items:</strong>
      <span>${order.items.length} item(s)</span>
    </div>
    <div style="display:flex; justify-content:space-between; margin-bottom:8px; border-top:1px dashed #cbd5e1; padding-top:8px;">
      <strong>Paid via:</strong>
      <span>${order.paymentMethod}</span>
    </div>
    <div style="display:flex; justify-content:space-between; font-size:1.1rem; font-weight:800; color:var(--secondary);">
      <strong>Total Paid:</strong>
      <span>$${order.summary.total.toFixed(2)}</span>
    </div>
  `;
}

// ==================== ORDER HISTORY ====================
async function openOrdersModal() {
  const container = document.getElementById('ordersListContainer');
  let orders = [];

  try {
    const userId = state.user ? state.user.id : null;
    const res = await fetch(`/api/orders${userId ? `?userId=${userId}` : ''}`);
    if (res.ok) {
      const data = await res.json();
      orders = data.orders || [];
    }
  } catch (err) {
    console.warn('API orders fetch failed, reading localStorage:', err);
  }

  // Merge with local orders
  const localOrders = JSON.parse(localStorage.getItem('aurastore_orders') || '[]');
  const combined = [...localOrders, ...orders.filter(o => !localOrders.some(lo => lo.id === o.id))];

  if (combined.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 48px; color:var(--text-muted);">
        <i class="fa-solid fa-receipt" style="font-size:3rem; margin-bottom:12px; color:var(--border);"></i>
        <h4>No orders found</h4>
        <p>You haven't placed any orders yet. Place your first simulated order!</p>
      </div>
    `;
  } else {
    container.innerHTML = combined.map(o => `
      <div class="order-card">
        <div class="order-card-header">
          <div>
            <strong style="color:var(--primary); font-size:1rem;">${o.id}</strong>
            <span style="color:var(--text-muted); font-size:0.8rem; margin-left:12px;">${new Date(o.date).toLocaleDateString()}</span>
          </div>
          <span class="order-badge">${o.status || 'Confirmed'}</span>
        </div>
        <div style="font-size:0.88rem; margin-bottom:8px;">
          <strong>Delivered to:</strong> ${o.customer.name} - ${o.customer.address}
        </div>
        <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:8px;">
          ${o.items.map(i => `${i.name} (x${i.quantity})`).join(', ')}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #f1f5f9; padding-top:8px;">
          <span style="font-size:0.82rem; color:var(--text-muted);">${o.paymentMethod}</span>
          <strong style="font-size:1.1rem; color:var(--secondary);">$${(o.summary ? o.summary.total : 0).toFixed(2)}</strong>
        </div>
      </div>
    `).join('');
  }

  ordersModal.classList.add('open');
}

// ==================== AUTHENTICATION ====================
function updateAuthUI() {
  const authBtnText = document.getElementById('authBtnText');
  const userGreeting = document.getElementById('userStatusGreeting');

  if (state.user) {
    authBtnText.textContent = `Sign Out (${state.user.name.split(' ')[0]})`;
    userGreeting.innerHTML = `Hi, <strong>${state.user.name}</strong>`;
  } else {
    authBtnText.textContent = 'Sign In';
    userGreeting.textContent = 'Welcome, Guest';
  }
}

async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Login failed');

    state.user = data.user;
    state.token = data.token;
    localStorage.setItem('aurastore_user', JSON.stringify(state.user));
    localStorage.setItem('aurastore_token', state.token);

    updateAuthUI();
    authModal.classList.remove('open');
    showToast(`Welcome back, ${state.user.name}!`);
  } catch (err) {
    showToast(err.message, 'error');
  }
}

async function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Registration failed');

    state.user = data.user;
    localStorage.setItem('aurastore_user', JSON.stringify(state.user));

    updateAuthUI();
    authModal.classList.remove('open');
    showToast(`Account created! Welcome, ${state.user.name}!`);
  } catch (err) {
    showToast(err.message, 'error');
  }
}

function handleLogout() {
  state.user = null;
  state.token = null;
  localStorage.removeItem('aurastore_user');
  localStorage.removeItem('aurastore_token');
  updateAuthUI();
  showToast('You have signed out.');
}

// ==================== TOAST & MODAL CONTROLS ====================
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  const icon = type === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-check';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('open'));
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
    loadProducts();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.style.display = 'none';
    loadProducts();
  });

  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    loadProducts();
  });

  document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
    state.activeCategory = 'All';
    state.searchQuery = '';
    searchInput.value = '';
    state.sortBy = 'default';
    sortSelect.value = 'default';
    loadProducts();
  });

  // Cart Drawer
  document.getElementById('cartBtn').addEventListener('click', () => {
    cartDrawer.classList.add('open');
  });

  document.getElementById('closeCartBtn').addEventListener('click', () => {
    cartDrawer.classList.remove('open');
  });

  cartDrawer.addEventListener('click', (e) => {
    if (e.target === cartDrawer) cartDrawer.classList.remove('open');
  });

  // Coupon
  document.getElementById('applyCouponBtn').addEventListener('click', () => {
    const code = document.getElementById('couponInput').value.trim().toUpperCase();
    if (code === 'ALPHA10') {
      state.coupon = { code: 'ALPHA10', discountPercent: 10 };
      document.getElementById('couponAppliedMsg').style.display = 'flex';
      showToast('10% Discount Coupon applied!');
      updateCartUI();
    } else {
      showToast('Invalid coupon code. Try ALPHA10', 'error');
    }
  });

  document.getElementById('removeCouponBtn')?.addEventListener('click', () => {
    state.coupon = null;
    document.getElementById('couponAppliedMsg').style.display = 'none';
    document.getElementById('couponInput').value = '';
    updateCartUI();
  });

  // Checkout
  document.getElementById('checkoutBtn').addEventListener('click', openCheckoutModal);
  document.getElementById('checkoutForm').addEventListener('submit', handleCheckoutSubmit);

  // Orders
  document.getElementById('myOrdersBtn').addEventListener('click', (e) => {
    e.preventDefault();
    openOrdersModal();
  });
  document.getElementById('demoOrderBtn').addEventListener('click', openOrdersModal);
  document.getElementById('viewOrdersFromSuccessBtn').addEventListener('click', () => {
    closeAllModals();
    openOrdersModal();
  });
  document.getElementById('continueShoppingBtn').addEventListener('click', closeAllModals);

  // Auth
  document.getElementById('authBtn').addEventListener('click', () => {
    if (state.user) {
      handleLogout();
    } else {
      authModal.classList.add('open');
    }
  });

  document.getElementById('tabLogin').addEventListener('click', () => {
    document.getElementById('tabLogin').classList.add('active');
    document.getElementById('tabRegister').classList.remove('active');
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
  });

  document.getElementById('tabRegister').addEventListener('click', () => {
    document.getElementById('tabRegister').classList.add('active');
    document.getElementById('tabLogin').classList.remove('active');
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
  });

  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  document.getElementById('registerForm').addEventListener('submit', handleRegister);

  // Close modals
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAllModals();
    });
  });
}
