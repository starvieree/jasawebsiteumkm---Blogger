# Panduan Pasang Jasa Buat Website Batu (Blogger)

## 1. Pasang template
1. Blogger > **Tema** > panah di samping "Sesuaikan" > **Cadangkan** (simpan template lama dulu).
2. Pilih **Pulihkan** > unggah `Blogspot_BanyuWeb_V5.xml`.

## 2. Buat Halaman Statis
Blogger > **Laman** > Laman baru > ganti ke **tampilan HTML** (ikon `<>`) > tempel isi file HTML.
Isi file sengaja dirancang agar Blogger tidak menyisipkan `<br>` liar.

| Judul halaman | Isi dari file       | URL yang harus jadi    | Keterangan |
|---------------|---------------------|------------------------|------------|
| Layanan       | layanan.html        | /p/layanan.html        | Terkoneksi Firestore (Real-time) |
| Paket         | harga.html          | /p/paket.html          | Terkoneksi Firestore (Real-time) |
| Portofolio    | portofolio.html     | /p/portofolio.html     | Galeri karya usaha Kota Batu |
| Tentang Kami  | tentang-kami.html   | /p/tentang-kami.html   | Profil tim & wilayah Batu |
| Kontak        | kontak.html         | /p/kontak.html         | Form WhatsApp & Peta Batu |
| **Admin**     | **admin.html**      | **/p/admin.html**      | **Dashboard Kelola Harga & Layanan (Login Admin)** |

> [!NOTE]
> - Beri judul **"Paket"** (bukan "Paket & Harga") agar URL-nya otomatis `/p/paket.html`.
> - Halaman **Admin** (`/p/admin.html`) **JANGAN** ditambahkan ke menu navbar publik agar aman.
> - Matikan komentar di tiap halaman (*Setelan laman > Komentar pembaca > Jangan izinkan*).

## 3. Integrasi Database Firebase (Kelola Harga & Layanan Dinamis)
Untuk panduan detail pembuatan database di Firebase Console, setup Security Rules, dan pengoperasian dashboard admin, silakan baca:
📄 **[ALUR-PENGERJAAN-FIREBASE.md](ALUR-PENGERJAAN-FIREBASE.md)**

## 4. Ganti data contoh (cari dan ganti di XML + halaman)
| Cari               | Ganti dengan                          |
|--------------------|---------------------------------------|
| `6288989643555`    | nomor WhatsApp asli (format 62...)    |
| `+62 889-8964-3555`| tampilan nomor di footer & kontak     |
| `Jasa Buat Website Batu` | nama brand Anda                     |
| `halo@jasabuatwebsitebatu.com` | email asli                    |
| `jasabuatwebsitebatu` | username Instagram                    |
| harga di halaman Harga & Beranda | harga asli Anda (atau kelola lewat Admin) |
| proyek di Portofolio | proyek klien asli (screenshot/URL)  |

## 5. Setelan Blogger yang disarankan
- **Setelan > Dasar > Favicon**: Opsional, Anda juga bisa mengunggah gambar logo persegi jika ingin favicon .ico khusus di Blogger.
- **Setelan > Postingan > Jumlah postingan di halaman utama = 3** (kartu artikel di Beranda).
- **Setelan > Dasar > Judul**: `Jasa Buat Website Batu - Solusi Website UMKM Kota Batu`
- **Setelan > Dasar > Deskripsi**: `Jasa pembuatan website murah & profesional khusus UMKM Kota Batu: villa, homestay, oleh-oleh apel, wisata, kafe & kuliner.`
- Tiap Laman: isi **Deskripsi penelusuran** (SEO) yang unik.
