/**
 * Dynamic Product Loader for Harry Kusumo (AVer Technology Hub)
 * Fetches data/products.json and populates product_detail.html & catalog views.
 */
document.addEventListener('DOMContentLoaded', async () => {
  const products = await fetchProductsData();
  if (!products) return;

  // If on product_detail.html page
  if (document.getElementById('product-detail-container')) {
    initProductDetailPage(products);
  }

  // If on products catalog grid page
  if (document.getElementById('products-catalog-grid')) {
    renderProductsCatalog(products);
  }
});

async function fetchProductsData() {
  try {
    const res = await fetch('data/products.json');
    if (!res.ok) throw new Error(`HTTP ${res.status} fetching products`);
    return await res.json();
  } catch (err) {
    console.warn('[ProductLoader] Failed to fetch data/products.json:', err);
    return null;
  }
}

function initProductDetailPage(products) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'cam570';
  const product = products.find(p => p.id.toLowerCase() === productId.toLowerCase()) || products[0];

  if (!product) return;

  // Update Page Meta & Titles
  document.title = `${product.name} ${product.subtitle ? '— ' + product.subtitle : ''}`;

  // Helper set text by ID
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText('product-name-title', product.name);
  setText('product-name-breadcrumb', product.name);
  setText('product-subtitle', product.subtitle);
  setText('product-series-badge', product.series || 'AVer Enterprise Series');
  setText('product-sku-badge', `SKU: ${product.sku || product.id.toUpperCase()}`);
  setText('product-capacity-spec', product.capacity || '-');
  setText('product-zoom-spec', product.zoom || '-');
  setText('product-audio-spec', product.audioRange || '-');
  setText('product-status-badge', product.status || 'Unit Demo Ready');
  setText('product-guarantee-badge', product.guarantee || 'Garansi Resmi 3 Tahun');

  // Update WhatsApp CTA Link
  const waBtn = document.getElementById('product-wa-btn');
  if (waBtn) {
    const message = encodeURIComponent(`Halo Harry, saya tertarik dengan produk ${product.name} (${product.subtitle}) dan ingin konsultasi spesifikasi / unit demo.`);
    waBtn.href = `https://wa.me/6281234567890?text=${message}`;
  }

  // Gallery rendering
  if (product.images && product.images.length > 0) {
    const mainImg = document.getElementById('main-product-img');
    if (mainImg) mainImg.src = product.images[0];

    const thumbContainer = document.getElementById('product-thumbnails-container');
    if (thumbContainer) {
      thumbContainer.innerHTML = product.images.map((imgUrl, idx) => `
        <button onclick="switchGalleryImage('${imgUrl}', this)" class="gallery-thumb shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-surface-container-lowest border-2 ${idx === 0 ? 'border-primary shadow-sm opacity-100' : 'border-outline-variant/30 hover:border-primary/60 opacity-70 hover:opacity-100'} p-2 transition-all overflow-hidden focus:outline-none cursor-pointer">
          <img src="${imgUrl}" alt="${product.name} thumbnail ${idx + 1}" class="w-full h-full object-contain pointer-events-none"/>
        </button>
      `).join('');
    }
  }

  // Render Official 2-Column Specifications Grid if target exists
  const specGridContainer = document.getElementById('dynamic-spec-grid');
  if (specGridContainer && product.specifications) {
    specGridContainer.innerHTML = renderSpecificationsGridHtml(product.specifications);
  }
}

function switchGalleryImage(imgSrc, btnElement) {
  const mainImg = document.getElementById('main-product-img');
  if (mainImg) {
    mainImg.style.opacity = '0.3';
    mainImg.style.transform = 'scale(0.97)';
    setTimeout(() => {
      mainImg.src = imgSrc;
      mainImg.style.opacity = '1';
      mainImg.style.transform = 'scale(1)';
    }, 140);
  }

  document.querySelectorAll('.gallery-thumb').forEach(btn => {
    btn.classList.remove('border-primary', 'shadow-sm', 'opacity-100');
    btn.classList.add('border-outline-variant/30', 'opacity-70');
  });

  if (btnElement) {
    btnElement.classList.remove('border-outline-variant/30', 'opacity-70');
    btnElement.classList.add('border-primary', 'shadow-sm', 'opacity-100');
  }
}

function renderSpecificationsGridHtml(specs) {
  let html = '';

  if (specs.camera) {
    html += `
      <div class="col-span-1 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
        <div class="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
          <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
            <span class="material-symbols-outlined">${specs.camera.icon || 'videocam'}</span>
          </div>
          <div>
            <h3 class="font-headline text-lg font-bold text-on-surface">${specs.camera.title || 'Spesifikasi Optik & Kamera'}</h3>
            <span class="font-code text-[11px] text-on-surface-variant uppercase font-semibold">Dual Camera System</span>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          ${specs.camera.ptzLens ? renderSpecGroup(specs.camera.ptzLens) : ''}
          ${specs.camera.aiLens ? renderSpecGroup(specs.camera.aiLens) : ''}
        </div>
      </div>
    `;
  }

  if (specs.features || specs.connectivity) {
    html += `
      <div class="col-span-1 flex flex-col gap-6">
        ${specs.features ? `
          <div class="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <div class="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
              <div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-bold">
                <span class="material-symbols-outlined">psychology</span>
              </div>
              <div>
                <h3 class="font-headline text-lg font-bold text-on-surface">Fitur AI &amp; Inovasi cerdas</h3>
                <span class="font-code text-[11px] text-on-surface-variant uppercase font-semibold">Teknologi AVer</span>
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${specs.features.map(f => `
                <div class="bg-surface p-3.5 rounded-xl border border-outline-variant/30 flex flex-col gap-1">
                  <span class="font-headline text-xs font-bold text-on-surface flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>${f.name}
                  </span>
                  <p class="font-body text-xs text-on-surface-variant leading-relaxed">${f.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${specs.connectivity ? `
          <div class="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <div class="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
              <div class="w-10 h-10 rounded-xl bg-tertiary-container/30 flex items-center justify-center text-tertiary font-bold">
                <span class="material-symbols-outlined">settings_input_hdmi</span>
              </div>
              <div>
                <h3 class="font-headline text-lg font-bold text-on-surface">Konektivitas &amp; Antarmuka</h3>
                <span class="font-code text-[11px] text-on-surface-variant uppercase font-semibold">Enterprise Hardware Port</span>
              </div>
            </div>
            <div class="flex flex-col gap-2 font-body text-xs">
              ${specs.connectivity.map(c => `
                <div class="flex items-center justify-between py-2 border-b border-outline-variant/20 last:border-0">
                  <span class="font-semibold text-on-surface">${c.label}</span>
                  <span class="text-on-surface-variant font-code text-[11px] bg-surface px-2.5 py-1 rounded-md border border-outline-variant/30">${c.value}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  return html;
}

function renderSpecGroup(group) {
  return `
    <div class="bg-surface p-4 rounded-xl border border-outline-variant/30 flex flex-col gap-2">
      <span class="font-headline text-xs font-bold text-primary uppercase tracking-wider">${group.title}</span>
      <div class="flex flex-col gap-2 mt-1">
        ${group.items.map(item => `
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs py-1 border-b border-outline-variant/20 last:border-0">
            <span class="text-on-surface-variant font-medium">${item.label}</span>
            <span class="font-semibold text-on-surface font-code text-[11px]">${item.value}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderProductsCatalog(products) {
  const container = document.getElementById('products-catalog-grid');
  if (!container) return;

  container.innerHTML = products.map(p => `
    <div class="group bg-surface-container-lowest border border-outline-variant/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/50 transition-all flex flex-col">
      <div class="relative w-full h-52 bg-surface p-6 flex items-center justify-center overflow-hidden">
        <img src="${p.images[0]}" alt="${p.name}" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"/>
        <span class="absolute top-3 left-3 font-code text-[10px] font-bold text-primary uppercase bg-white/90 backdrop-blur px-2.5 py-1 rounded-md border border-outline-variant/30 shadow-xs">${p.categoryLabel || 'AVer Hardware'}</span>
      </div>
      <div class="p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          <span class="font-code text-[11px] text-on-surface-variant uppercase font-semibold">${p.series || 'AVer Enterprise'}</span>
          <h3 class="font-headline text-lg font-bold text-on-surface mt-1 group-hover:text-primary transition-colors">${p.name}</h3>
          <p class="font-body text-xs text-on-surface-variant mt-1.5 leading-relaxed line-clamp-2">${p.subtitle}</p>
        </div>
        <div class="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[16px] text-primary">zoom_in</span>
            <span class="font-code text-xs font-semibold text-on-surface">${p.zoom}</span>
          </div>
          <a href="product_detail.html?id=${p.id}" class="inline-flex items-center gap-1 font-headline text-xs font-bold text-primary hover:text-primary-dark transition-colors">
            Detail Produk →
          </a>
        </div>
      </div>
    </div>
  `).join('');
}
