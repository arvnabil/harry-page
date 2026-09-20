# Pemetaan & Analisis Section Halaman (Site Structure Mapping)

Dokumen ini berisi pemetaan lengkap dan analisis struktur *section* untuk setiap halaman HTML di dalam website **Harry Kusumo - AVer AV Technology Platform**.

---

## 📋 Ringkasan Arsitektur Website

Website dibangun menggunakan arsitektur **Vanilla HTML5, Tailwind CSS, & Modern Component-Based JS**:
- **Header Dinamis**: [`components/header.html`](file:///c:/development/harry/components/header.html) di-load otomatis via `js/components.js`.
- **Footer Dinamis**: [`components/footer.html`](file:///c:/development/harry/components/footer.html) di-load otomatis via `js/components.js`.
- **Data Centralized**: [`data/products.json`](file:///c:/development/harry/data/products.json) di-load dinamis oleh `js/product-loader.js`.

---

## 📄 1. `index.html` (Halaman Utama / Beranda)
Halaman utama yang menyajikan pengenalan personal brand Harry Kusumo, filosofi AV, taksonomi ekosistem AVer, hingga proyek & artikel terbaru.

### Pemetaan Section:
1. **Header Dinamis (`#site-header`)**: Navigasi utama + Dropdown Menu AVer + Dropdown Akun/Login Pengguna.
2. **Hero Section (`#hero`)**:
   - Status badge ("Harry Kusumo · AV Technology Enthusiast").
   - Judul & Tagline: *"AVer Technology, Explained."*
   - Telemetri Ringkas: Stat 10+ tahun AV, 50+ implementasi, 4K60 benchmark.
   - Visual Potret Harry dengan Overlay Retikel & Telemetri Kamera AI.
3. **Section Filosofi (`#philosophy`)**:
   - 3 Pilar Utama: Teknologi (Hardware/Protocol), Pengalaman (Human-Centric AV), Perspektif (Konsultasi Enterprise).
4. **Section Taksonomi Ekosistem AVer (`#aver-ecosystem`)**:
   - Badge Status: *"6 Solusi Utama AVer"*.
   - 6 Kartu Domain Utama: Kolaborasi Video, Professional AV, Teknologi Pendidikan, AI & Kamera Cerdas, Sertifikasi Medis, Software & Manajemen.
5. **Section Modul Arsitektur (`#core-tech`)**:
   - Grid 6 Kategori Utama Teknologi AVer dengan nomor modul (01 - 06).
6. **Section Bedah Teknis Mendalam**:
   - *AI Auto Tracking — Di Balik Lensa*: Alur pemrosesan 5 tahap (Penangkapan, Ekstraksi Fitur, Pemodelan Neural, Kalkulasi Motor, Output Stream).
7. **Section Proyek & Implementasi Nyata (`#projects`)**:
   - Kartu Studi Kasus Implementasi AV di Perusahaan & Universitas.
8. **Section Wawasan & Artikel AV (`#insights`)**:
   - Artikel teknis dan panduan integrasi terbaru.
9. **Section Biografi & Keahlian Harry (`#about-harry`)**:
   - Profil mendalam, sertifikasi (AVer, Zoom, Teams), & matriks keahlian teknis.
10. **Section Form Kontak & CTA (`#contact-cta`)**:
    - Banner ajakan berdiskusi dan konsultasi AV.
11. **Footer Dinamis (`#site-footer`)**.

---

## 📄 2. `aver.html` (Profil Perusahaan & Ekosistem AVer)
Halaman landas untuk mengenal AVer Information Inc. secara komprehensif.

### Pemetaan Section:
1. **Header & Context Bar**: Breadcrumb navigasi.
2. **Hero Header**: Profil AVer, Misi Inovasi AI Optics & Video Collaboration.
3. **AVer Global Footprint**: Statistik Jangkauan Global (Negara, Paten, Penghargaan Industri).
4. **Nilai Inti & Ekosistem Inovasi**: 4 Pilar Teknologi (SmartFrame, Audio Fence, AI Tracking, Cloud Management).
5. **Portofolio Solusi AVer**: 6 Bidang Unggulan AVer.
6. **Integrasi & Sertifikasi Ekosistem**: Logotype partner (Microsoft Teams, Zoom Rooms, Google Meet, Barco, Sennheiser, Shure).
7. **Call to Action**: Banner eksplorasi produk dan pengajuan unit demo.
8. **Footer Dinamis**.

---

## 📄 3. `aver_solutions.html` (Solusi & Arsitektur Teknis AVer)
Halaman deep-dive rekayasa teknis dan arsitektur produk AVer.

### Pemetaan Section:
1. **Header & Breadcrumb Bar**: Navigasi Beranda > AVer > Solusi AVer.
2. **Page Hero Header**: *"Teknologi AVer, Dijelaskan."* — Eksplorasi mekanika optik & algoritma AI.
3. **Matriks Subsistem (6 Kartu Kategori Solusi)**:
   - 01 / KOLABORASI: Kolaborasi Video (Dual 4K, ePTZ).
   - 02 / SENSING: Pelacakan Otomatis AI (Neural Engine).
   - 03 / OPTOK: Kamera PTZ (30X Optical Zoom).
   - 04 / INFRA: Pro AV & Broadcast (NDI|HX, Dante AV-H).
   - 05 / RUANGAN: Solusi Ruang Rapat (Beamforming, Audio Fence).
   - 06 / EDU HIBRIDA: Teknologi Pendidikan (Doc Cam, Blackboard Detection).
4. **Diagram Arsitektur Ekosistem Teknis (`#pipeline`)**:
   - *Topologi Audio-Visual AVer*: Pipeline 5 Tahap dari penangkapan sensor hingga cloud collaboration.
   - SVG Conduit Visualizer (Domain Capture, Edge Compute, Enterprise Network, Cloud).
5. **Tolak Ukur Rekayasa (Benchmark Matrix)**:
   - Tabel Perbandingan Metrik Optik & Algoritma (Standar AV Lama vs. Arsitektur AVer Generasi Baru).
6. **Perspektif Rekayasa Harry Kusumo & Lab CTA**:
   - "Fidelity is not an accident..." — Kutipan & foto pengujian Harry's Lab.
7. **CTA Navigasi Direktori Produk**.
8. **Footer Dinamis**.

---

## 📄 4. `products.html` (Direktori & Kataloh Produk)
Halaman katalog produk interaktif dengan pencarian dan filter dinamis.

### Pemetaan Section:
1. **Header & Context Bar**.
2. **Hero Header Direktori Produk**: Filter & Pencarian Perangkat Keras AVer.
3. **Komponen Filter & Search Bar**:
   - Input pencarian kata kunci.
   - Tombol Kategori Filter (Semua, Video Bar, PTZ Camera, Auto Tracking, Visualizer, Aksesori).
4. **Grid Kartu Produk Dinamis (`#product-grid`)**:
   - Di-render otomatis dari [`data/products.json`](file:///c:/development/harry/data/products.json) via `js/product-loader.js`.
   - Menampilkan gambar, badge spesifikasi, kategori, dan tombol detail.
5. **Panel Pembanding Spesifikasi Ringkas**.
6. **CTA Dukungan Layanan & Firmware Update**.
7. **Footer Dinamis**.

---

## 📄 5. `product_detail.html` (Detail Produk Spesifik e.g. CAM570 / VB342 Pro)
Halaman spesifikasi rinci dan dokumentasi teknis produk tertentu.

### Pemetaan Section:
1. **Header & Breadcrumb Bar**.
2. **Product Hero & Media Gallery**:
   - Preview Gambar Utama & Thumbnail Slider.
   - Ringkasan Fitur Utama, Harga/Status, & Tombol Request Demo / Datasheet.
3. **Key Highlights & Feature Cards**:
   - Ikon & Penjelasan Fitur Unggulan (Sensors Dual-Lens, SmartGallery, Voice Tracking).
4. **Matriks Spesifikasi Teknis Lengkap (`#support`)**:
   - Tabel Detail Kamera, Optik, Output Video, Audio, Antarmuka, Protokol, & Garansi.
5. **Diagram Topology & Arsitektur Ruangan**:
   - Panduan Penginstalan di Ruang Rapat (Small, Medium, Large Boardroom).
6. **Pusat Unduhan & Dokumentasi**:
   - Link Datasheet PDF, Manual Pengguna, Firmware Update, & Software Utilitas.
7. **Produk Terkait (Related Hardware)**.
8. **Footer Dinamis**.

---

## 📄 6. `products_hub.html` (Pusat Kategori Produk)
Halaman navigasi tingkat atas untuk memilih kategori produk AVer.

### Pemetaan Section:
1. **Header & Context Bar**.
2. **Category Hub Hero Header**.
3. **Grid Card Kategori Produk Utama**:
   - Video Collaboration Systems, Pro AV PTZ Series, EdTech Visualizers, Mobile Carts.
4. **Filter Berdasarkan Skala Ruangan**:
   - Huddle Room (1-4 Orang), Medium Room (5-10 Orang), Boardroom (10+ Orang), Auditorium.
5. **Footer Dinamis**.

---

## 📄 7. `insights.html` (Wawasan & Media Room)
Halaman kumpulan artikel teknis, analisis tren AV, dan berita.

### Pemetaan Section:
1. **Header & Context Bar**.
2. **Media Room Hero**: Pusat Pengetahuan & Artikel AV.
3. **Featured Article (Artikel Utama Unggulan)**:
   - Banner besar artikel utama dengan sinopsis dan tombol baca.
4. **Filter Kategori Artikel**:
   - Semua, Deep Dive Teknis, Panduan Ruang Rapat, Tren Industri, Riset Lab.
5. **Grid Daftar Artikel**:
   - Kartu artikel dengan thumbnail, tanggal, kategori, dan estimasi waktu baca.
6. **Newsletter Subscription Banner**.
7. **Footer Dinamis**.

---

## 📄 8. `article.html` (Halaman Detail Artikel / Blog Post)
Halaman membaca artikel teknis individual.

### Pemetaan Section:
1. **Header & Breadcrumb Bar**.
2. **Header Artikel**:
   - Judul Artikel, Tag Kategori, Penulis (Harry Kusumo), Tanggal Rilis, Durasi Baca.
3. **Gambar Utama / Header Visual**.
4. **Konten Artikel Deep-Dive**:
   - Paragraf analisis, blockquote, infografis teknis, diagram sinyal, dan snippet kode.
5. **Kotak Profil Penulis (Harry Kusumo)**.
6. **Rekomendasi Artikel Terkait**.
7. **Footer Dinamis**.

---

## 📄 9. `about.html` (Tentang Harry Kusumo)
Halaman biografi personal, latar belakang teknis, dan filosofi pengujian AV.

### Pemetaan Section:
1. **Header & Breadcrumbs**.
2. **Hero Section (Profil & Telemetri)**:
   - Ringkasan peranan Harry Kusumo & lencana ekosistem.
3. **Section 2: Siapa Harry Kusumo**:
   - Biografi mendalam, filosofi AV, dan sertifikasi industri.
4. **Section 3: Apa yang Dijelajahi Harry**:
   - 6 Kartu Bidang Riset & Pengujian.
5. **Section 4: Perspektif Rekayasa**:
   - Pendekatan pengujian dunia nyata vs. data pemasaran.
6. **Section 5: Metodologi Pengujian (Timeline 4 Langkah)**:
   - 01 Audit Optik -> 02 Pengujian Akustik -> 03 Stress-Test Jaringan -> 04 Integrasi Cloud.
7. **Section 6: Peta Ekosistem AVer**:
   - Diagram Node Interaktif Hubungan Perangkat & Sistem.
8. **Section 7: Karya & Proyek Terpilih**:
   - Tautan cepat ke Projects, Lab, dan Insights.
9. **Section 8: Banner CTA Kontak & Footer Dinamis**.

---

## 📄 10. `contact.html` (Kontak & Layanan Demo)
Halaman komunikasi untuk pengajuan konsultasi, pengujian unit demo, atau pertanyaan.

### Pemetaan Section:
1. **Header & Breadcrumbs**.
2. **Contact Hero Header**.
3. **Formulir Kontak & Permintaan Demo Unit**:
   - Input Nama, Email, Perusahaan, Jenis Perangkat AVer yang diminati, & Pesan.
4. **Detail Kontak & Alamat Lab**:
   - Email, jam pengujian lab, lokasi, & media sosial profesional.
5. **Section FAQ (Pertanyaan Umum)**:
   - Pertanyaan seputar peminjaman unit demo, jadwal uji coba, dan konsultasi ruang.
6. **Footer Dinamis**.

---

## 📄 11. `collaboration.html` (Arsitektur Ruang Kolaborasi)
Halaman solusi teknis untuk desain ruang rapat hibrida enterprise.

### Pemetaan Section:
1. **Header & Context Bar**.
2. **Hero Header**: Arsitektur Kolaborasi Hibrida Enterprise.
3. **Topologi Ruang Rapat (4 Skala Ruangan)**:
   - Small Huddle Room, Medium Conference, Executive Boardroom, Training Room.
4. **Fitur Ekosistem Kolaborasi**:
   - Integrasi Teams Rooms, Zoom Rooms, Audio Fence, & Single-Cable BYOD.
5. **Panduan Desain & Tata Letak Akustik/Kamera**.
6. **Footer Dinamis**.
