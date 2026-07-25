/* ==========================================================================
   M.S. JEWELLERS — INTERACTIVE LUXURY ENGINE & WHATSAPP INTEGRATION
   ========================================================================== */

const CONFIG = {
  brandName: "M.S. Jewellers",
  brandHindi: "एम.एस. ज्वैलर्स",
  whatsappNumber: "919891021163",
  whatsappFormatted: "+91 98910 21163",
  address: "Batla House, 19/2, Nafees Road, Jamia, Jogabai Extension, Jamia Nagar, Okhla, New Delhi, Delhi 110025",
  rating: "4.1",
  reviewsCount: "8",
};

// Curated Luxury Jewellery Dataset
const PRODUCTS = [
  {
    id: "ms-gold-01",
    name: "Royal Heritage 22K Gold Choker",
    category: "Gold Jewellery",
    purity: "22K Solid Gold",
    image: "assets/images/gold-necklace.jpg",
    tag: "BIS Hallmarked",
    description: "An extraordinary 22K solid gold royal choker necklace showcasing intricate antique filigree and delicate beadwork.",
    purity_spec: "22K BIS 916 Hallmarked Gold",
    est_weight: "32.40 grams",
    craftsmanship: "Handcrafted Antique Heritage"
  },
  {
    id: "ms-bridal-01",
    name: "Maharani Kundan & Ruby Bridal Set",
    category: "Bridal Collection",
    purity: "Kundan & Polki Gold",
    image: "assets/images/bridal-set.jpg",
    tag: "Royal Bridal",
    description: "Full imperial bridal necklace set adorned with certified Kundan stones, rubies, and delicate freshwater pearl drops.",
    purity_spec: "22K Gold Base with Certified Kundan",
    est_weight: "85.00 grams (Set)",
    craftsmanship: "Royal Court Bespoke"
  },
  {
    id: "ms-rings-01",
    name: "Imperial Solitaire Diamond Band",
    category: "Rings",
    purity: "18K Gold & Diamonds",
    image: "assets/images/diamond-ring.jpg",
    tag: "Best Seller",
    description: "A showstopping solitaire diamond set upon a contoured 18K warm yellow gold polished band.",
    purity_spec: "18K Gold (750 Purity) & VVS Diamonds",
    est_weight: "6.80 grams",
    craftsmanship: "Precision Diamond Setting"
  },
  {
    id: "ms-necklaces-01",
    name: "Opulent Emerald & Gold Temple Necklace",
    category: "Necklaces",
    purity: "22K Yellow Gold",
    image: "assets/images/hero-bg.jpg",
    tag: "Signature Piece",
    description: "Timeless Temple design featuring natural emerald cabochons and solid 22K yellow gold floral motifs.",
    purity_spec: "22K BIS Hallmarked Gold",
    est_weight: "44.20 grams",
    craftsmanship: "Traditional Temple Carving"
  },
  {
    id: "ms-silver-01",
    name: "Royal Sapphire Sterling Silver Set",
    category: "Silver Jewellery",
    purity: "925 Sterling Silver",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    tag: "Pure Silver",
    description: "925 hallmarked sterling silver necklace featuring deep blue lab-grown sapphire drops and rhodium mirror polish.",
    purity_spec: "925 Hallmarked Fine Silver",
    est_weight: "26.50 grams",
    craftsmanship: "Rhodium Anti-Tarnish Finish"
  },
  {
    id: "ms-earrings-01",
    name: "Nawabi Pearl & Gold Jhumka Earrings",
    category: "Earrings",
    purity: "22K Antique Gold",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop",
    tag: "Wedding Essential",
    description: "Ornate traditional jhumkas embellished with micro-engravings and cascading seed pearls.",
    purity_spec: "22K Antique Gold",
    est_weight: "18.60 grams (Pair)",
    craftsmanship: "Filigree & Pearl Weaving"
  },
  {
    id: "ms-bracelets-01",
    name: "Classic Solid Gold Kada Bangle",
    category: "Bracelets",
    purity: "22K Solid Gold",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    tag: "Everyday Luxury",
    description: "Sleek and majestic 22K solid gold kada featuring subtle geometric hand-chased patterns.",
    purity_spec: "22K BIS Hallmarked Gold",
    est_weight: "24.00 grams",
    craftsmanship: "Hand-chased Solid Casting"
  },
  {
    id: "ms-bracelets-02",
    name: "Royal Antique Gold Kada Set",
    category: "Bracelets",
    purity: "22K Antique Gold",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    tag: "Royal Heritage",
    description: "Heavy handcrafted antique 22K gold bangle kada set decorated with floral filigree and ruby accents.",
    purity_spec: "22K BIS Hallmarked Gold",
    est_weight: "38.50 grams (Pair)",
    craftsmanship: "Antique Filigree & Ruby Inlay"
  },
  {
    id: "ms-bracelets-03",
    name: "Nawabi Diamond & Pearl Gold Bracelet",
    category: "Bracelets",
    purity: "18K Gold & Diamonds",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    tag: "Party Special",
    description: "Elegant 18K gold flexible link bracelet featuring brilliant diamonds and lustrous seed pearls.",
    purity_spec: "18K Gold (750 Purity) & Certified Diamonds",
    est_weight: "16.20 grams",
    craftsmanship: "Flexible Link & Micro-Pave Setting"
  },
  {
    id: "ms-bracelets-04",
    name: "Kundan Meenakari Bridal Gold Bangle Pair",
    category: "Bracelets",
    purity: "22K Gold & Kundan",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop",
    tag: "Bridal Essential",
    description: "Traditional 22K gold kada pair featuring red and green Meenakari artwork with uncut Kundan stones.",
    purity_spec: "22K BIS Hallmarked Gold",
    est_weight: "42.00 grams (Pair)",
    craftsmanship: "Traditional Jaipur Meenakari Enamelling"
  },
  {
    id: "ms-custom-01",
    name: "Bespoke Personalized Jewellery Atelier",
    category: "Custom Jewellery",
    purity: "Gold / Silver / Gemstones",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
    tag: "Custom Order",
    description: "Bring your exact design vision to life with our master jewellers. Crafted tailored to your budget and specifications.",
    purity_spec: "22K / 18K / 925 Silver Available",
    est_weight: "Tailored to Specification",
    craftsmanship: "1-on-1 Master Jeweller Consultation"
  }
];

// Helper: Build WhatsApp URL
function buildWhatsAppUrl(message) {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedText}`;
}

// Global WhatsApp Actions
function chatOnWhatsApp(customText) {
  const defaultText = `Hello M.S. Jewellers, I am visiting your website and would like to connect with your jewellery experts.`;
  const text = customText || defaultText;
  window.open(buildWhatsAppUrl(text), '_blank');
}

function enquireProduct(productName, category, actionType) {
  let message = "";
  if (actionType === 'price') {
    message = `Hello M.S. Jewellers, I am interested in the [${productName}] from your ${category} collection. Could you please share the current gold rate and final estimated price?`;
  } else if (actionType === 'availability') {
    message = `Hello M.S. Jewellers, I would like to check if [${productName}] is currently available in stock at your Jamia Nagar showroom?`;
  } else if (actionType === 'custom') {
    message = `Hello M.S. Jewellers, I love the design of [${productName}] (${category}) and would like to request a custom modification in gold weight/carat.`;
  } else {
    message = `Hello M.S. Jewellers, I am interested in [${productName}] (${category}). Could you please share more details, price, and photos on WhatsApp?`;
  }
  window.open(buildWhatsAppUrl(message), '_blank');
}

function sendInspirationInquiry() {
  const message = `Hello M.S. Jewellers, I saw a jewellery design online and would like to enquire about making a similar design with your showroom.`;
  window.open(buildWhatsAppUrl(message), '_blank');
}

function bookShowroomAppointment() {
  const message = `Hello M.S. Jewellers, I would like to book a private appointment to visit your showroom at Batla House, Jamia Nagar.`;
  window.open(buildWhatsAppUrl(message), '_blank');
}

function submitCustomerQuestion(event) {
  if (event) event.preventDefault();
  const category = document.getElementById('askCategory')?.value || 'General Inquiry';
  const questionInput = document.getElementById('askQuestionText')?.value.trim();
  
  if (!questionInput) {
    alert("Please type your question or select a prompt chip before continuing.");
    return;
  }
  
  const message = `Hello M.S. Jewellers, I have a question regarding [${category}]: "${questionInput}"`;
  window.open(buildWhatsAppUrl(message), '_blank');
}

function fillQuestionPrompt(promptText) {
  const textarea = document.getElementById('askQuestionText');
  if (textarea) {
    textarea.value = promptText;
    textarea.focus();
  }
}

// Render Products Grid
function renderProducts(categoryFilter = 'All', searchQuery = '') {
  const gridContainer = document.getElementById('productsGrid');
  if (!gridContainer) return;

  gridContainer.innerHTML = '';

  const filtered = PRODUCTS.filter(item => {
    const matchesCategory = (categoryFilter === 'All' || item.category.toLowerCase() === categoryFilter.toLowerCase());
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
        <p style="font-size: 1.2rem; color: var(--gold-champagne);">No jewellery items found matching your criteria.</p>
        <button onclick="resetFilters()" class="btn-outline-gold" style="margin-top: 1rem;">View All Collections</button>
      </div>
    `;
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrap" onclick="openProductModal('${product.id}')" style="cursor: pointer;">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="product-tag-badge">${product.tag}</span>
      </div>
      <div class="product-details">
        <span class="product-category">${product.category} • ${product.purity}</span>
        <h3 class="product-title" onclick="openProductModal('${product.id}')" style="cursor: pointer;">${product.name}</h3>
        <p class="product-meta">${product.description}</p>
        <div class="product-actions">
          <button class="btn-sm-whatsapp" onclick="enquireProduct('${product.name}', '${product.category}', 'enquire')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            Enquire Now
          </button>
          <button class="btn-sm-gold" onclick="openProductModal('${product.id}')">
            Quick View
          </button>
        </div>
      </div>
    `;
    gridContainer.appendChild(card);
  });
}

function resetFilters() {
  const activeBtn = document.querySelector('.filter-btn.active');
  if (activeBtn) activeBtn.classList.remove('active');
  const allBtn = document.querySelector('.filter-btn[data-filter="All"]');
  if (allBtn) allBtn.classList.add('active');

  const searchInput = document.getElementById('productSearchInput');
  if (searchInput) searchInput.value = '';

  renderProducts('All', '');
}

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalOverlay = document.getElementById('productModalOverlay');
  const modalContent = document.getElementById('productModalBody');

  if (!modalOverlay || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-wrap">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="modal-info">
        <span class="modal-info-category">${product.category} • ${product.purity}</span>
        <h3>${product.name}</h3>
        <p class="modal-info-desc">${product.description}</p>

        <ul class="modal-specs-list">
          <li>Purity Standard: <span>${product.purity_spec}</span></li>
          <li>Est. Weight / Specs: <span>${product.est_weight}</span></li>
          <li>Craftsmanship: <span>${product.craftsmanship}</span></li>
          <li>Showroom Verification: <span>BIS Hallmarked Guaranteed</span></li>
        </ul>

        <div style="display: flex; flex-direction: column; gap: 0.8rem; margin-top: 1.5rem;">
          <button class="btn-gold" onclick="enquireProduct('${product.name}', '${product.category}', 'price')" style="justify-content: center; width: 100%;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            Ask About Price on WhatsApp
          </button>
          <button class="btn-outline-gold" onclick="enquireProduct('${product.name}', '${product.category}', 'availability')" style="justify-content: center; width: 100%;">
            Check Showroom Availability
          </button>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modalOverlay = document.getElementById('productModalOverlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function toggleMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) {
    drawer.classList.toggle('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const splash = document.getElementById('splashScreen');
    if (splash) {
      splash.classList.add('fade-out');
      setTimeout(() => splash.remove(), 800);
    }
  }, 1000);

  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  renderProducts();

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-filter');
      const searchVal = document.getElementById('productSearchInput')?.value || '';
      renderProducts(cat, searchVal);
    });
  });

  const searchInput = document.getElementById('productSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeBtn = document.querySelector('.filter-btn.active');
      const currentCat = activeBtn ? activeBtn.getAttribute('data-filter') : 'All';
      renderProducts(currentCat, e.target.value);
    });
  }

  const modalOverlay = document.getElementById('productModalOverlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProductModal();
      }
    });
  }
});
