/**
 * BanyuWeb - Konfigurasi & Helper Firebase
 * 
 * PANDUAN PENGISIAN:
 * 1. Buat project di https://console.firebase.google.com/
 * 2. Masuk ke Project Settings > General > Bagian "Your apps" (ikon Web </>)
 * 3. Salin nilai apiKey, authDomain, projectId, dll. ke objek di bawah ini.
 */

const BW_DEFAULT_CONFIG = {
  apiKey: "ISI_DENGAN_API_KEY_ANDA",
  authDomain: "banyuweb-umkm.firebaseapp.com",
  projectId: "banyuweb-umkm",
  storageBucket: "banyuweb-umkm.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

// Cek apakah ada config tersimpan di localStorage (bisa diisi via halaman Admin)
function getFirebaseConfig() {
  try {
    const saved = localStorage.getItem('bw_firebase_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.apiKey && parsed.apiKey !== "ISI_DENGAN_API_KEY_ANDA") {
        return parsed;
      }
    }
  } catch (e) {}
  return BW_DEFAULT_CONFIG;
}

// Inisialisasi Firebase App secara aman
function initBwFirebase() {
  const config = getFirebaseConfig();
  if (!firebase.apps.length) {
    try {
      firebase.initializeApp(config);
    } catch (e) {
      console.warn("Firebase belum diinisialisasi dengan kredensial valid:", e);
    }
  }
  return {
    auth: typeof firebase.auth === 'function' ? firebase.auth() : null,
    db: typeof firebase.firestore === 'function' ? firebase.firestore() : null,
    isConfigured: config.apiKey && config.apiKey !== "ISI_DENGAN_API_KEY_ANDA"
  };
}

// Data Bawaan / Default jika database masih kosong atau offline
const BW_SEED_DATA = {
  paket_harga: [
    {
      nama: "Rintisan",
      harga: "Rp 1,2 jt",
      subtext: "mulai dari",
      deskripsi: "Untuk usaha yang baru mulai tampil online.",
      fitur: [
        "Website 3 halaman (Beranda, Tentang, Kontak)",
        "Desain sesuai warna & logo usaha",
        "Tombol WhatsApp & peta Google Maps",
        "Tampil rapi di HP & komputer",
        "SEO dasar & revisi 2x"
      ],
      fiturMinus: [
        "Blog / artikel",
        "Setup Google Bisnis"
      ],
      isPopular: false,
      urutan: 1,
      linkWa: "Halo BanyuWeb, saya tertarik Paket Rintisan. Boleh minta penjelasannya?"
    },
    {
      nama: "Bisnis",
      harga: "Rp 2,5 jt",
      subtext: "mulai dari",
      deskripsi: "Paling pas untuk usaha yang ingin dipercaya & ramai dicari.",
      fitur: [
        "Website hingga 6 halaman + galeri",
        "Blog / artikel untuk SEO",
        "SEO lokal Banyuwangi",
        "Setup Google Bisnis & Maps",
        "Formulir pesan langsung ke WhatsApp",
        "Revisi 3x & pelatihan 1 jam"
      ],
      fiturMinus: [],
      isPopular: true,
      urutan: 2,
      linkWa: "Halo BanyuWeb, saya tertarik Paket Bisnis. Boleh minta penjelasannya?"
    },
    {
      nama: "Toko & Katalog",
      harga: "Rp 4,5 jt",
      subtext: "mulai dari",
      deskripsi: "Untuk yang ingin memamerkan banyak produk.",
      fitur: [
        "Katalog hingga 50 produk + kategori",
        "Tombol Pesan via WhatsApp per produk",
        "Pencarian produk & filter",
        "Tautan marketplace (Shopee/Tokopedia)",
        "Revisi 3x & pelatihan 2 jam",
        "Opsi keranjang & pembayaran online (tambahan)"
      ],
      fiturMinus: [],
      isPopular: false,
      urutan: 3,
      linkWa: "Halo BanyuWeb, saya tertarik Paket Toko & Katalog. Boleh minta penjelasannya?"
    }
  ],
  layanan: [
    {
      slugId: "profil-usaha",
      nama: "Website Profil Usaha",
      icon: "bi-window-sidebar",
      lead: "Etalase digital usaha Anda: siapa Anda, apa yang dijual, di mana lokasinya, dan cara memesan. Cocok untuk usaha yang ingin lebih dipercaya pelanggan baru.",
      fitur: [
        "Beranda, Tentang, Layanan/Produk, Galeri, Kontak",
        "Tombol WhatsApp & peta lokasi Google Maps",
        "Tampilan rapi di HP, tablet, dan komputer",
        "SEO dasar agar muncul saat orang mencari di Banyuwangi"
      ],
      tags: ["Rumah makan", "Homestay", "Bengkel", "Laundry", "Salon"],
      urutan: 1,
      previewTitle: "Homestay Kampung Ijen",
      previewSub: "Menginap nyaman dekat kawah Ijen",
      previewDomain: "homestaykampungijen.com"
    },
    {
      slugId: "katalog-toko",
      nama: "Katalog Produk & Toko Online",
      icon: "bi-shop",
      lead: "Katalog produk lengkap dengan foto, harga, dan tombol pesan. Pelanggan tinggal klik, pesanan langsung masuk ke WhatsApp Anda — tanpa ribet.",
      fitur: [
        "Katalog produk dengan kategori & pencarian",
        "Tombol Pesan via WhatsApp di setiap produk",
        "Opsi keranjang & pembayaran online (bila dibutuhkan)",
        "Tautan ke marketplace (Shopee, Tokopedia) tetap bisa dipasang"
      ],
      tags: ["Oleh-oleh", "Batik", "Kerajinan", "Kopi", "Hasil laut"],
      urutan: 2,
      previewTitle: "Oleh-Oleh Osing",
      previewSub: "Khas Banyuwangi, kirim ke seluruh Indonesia",
      previewDomain: "oleholehosing.com"
    },
    {
      slugId: "landing-promosi",
      nama: "Landing Page Promosi",
      icon: "bi-megaphone",
      lead: "Satu halaman yang dirancang khusus untuk menarik calon pembeli dari iklan Facebook/Instagram/Google atau dari kartu nama dan brosur (QR code).",
      fitur: [
        "Satu halaman fokus dengan ajakan bertindak yang jelas",
        "Cepat dibuka, hemat kuota pengunjung",
        "Cocok untuk promo musiman, kelas, atau peluncuran produk",
        "Bisa dipasang pelacak iklan (Meta Pixel / Google Analytics)"
      ],
      tags: ["Promo", "Kursus", "Event", "Peluncuran produk"],
      urutan: 3,
      previewTitle: "Kopi Glenmore",
      previewSub: "Promo paket kopi petik merah",
      previewDomain: "kopiglenmore.com/promo"
    },
    {
      slugId: "redesign",
      nama: "Redesain Website Lama",
      icon: "bi-arrow-repeat",
      lead: "Punya website tapi tampilannya ketinggalan zaman, lambat, atau tidak enak dibuka di HP? Kami rapikan tampilan, kecepatan, dan isinya tanpa kehilangan data lama.",
      fitur: [
        "Audit singkat: apa yang membuat website sepi pengunjung",
        "Desain baru yang modern & ramah HP",
        "Perbaikan kecepatan & struktur agar disukai Google",
        "Konten lama dipindahkan dengan rapi"
      ],
      tags: ["Website jadul", "Lambat", "Tidak responsif"],
      urutan: 4,
      previewTitle: "Ikan Asin Muncar",
      previewSub: "Segar dari pelabuhan Muncar",
      previewDomain: "ikanasinmuncar.com"
    }
  ]
};
