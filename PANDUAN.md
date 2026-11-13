# Panduan Pasang BanyuWeb (Blogger)

## 1. Pasang template
1. Blogger > **Tema** > panah di samping "Sesuaikan" > **Cadangkan** (simpan template lama dulu).
2. Pilih **Pulihkan** > unggah `Blogspot_BanyuWeb_V5.xml`.

## 2. Buat 5 halaman statis
Blogger > **Laman** > Laman baru > ganti ke **tampilan HTML** (ikon `<>`) > tempel isi file di folder `halaman-blogger/`.
Isi file sengaja satu baris agar Blogger tidak menyisipkan `<br>` liar.

| Judul halaman | Isi dari file       | URL yang harus jadi    |
|---------------|---------------------|------------------------|
| Layanan       | layanan.html        | /p/layanan.html        |
| Paket         | harga.html          | /p/paket.html          |
| Portofolio    | portofolio.html     | /p/portofolio.html     |
| Tentang Kami  | tentang-kami.html   | /p/tentang-kami.html   |
| Kontak        | kontak.html         | /p/kontak.html         |

Catatan: beri judul **"Paket"** (bukan "Paket & Harga") agar URL-nya otomatis `/p/paket.html`.
Matikan komentar di tiap halaman (Setelan laman > Komentar pembaca > Jangan izinkan).

## 3. Ganti data contoh (cari dan ganti di XML + 5 halaman)
| Cari               | Ganti dengan                          |
|--------------------|---------------------------------------|
| `6288989643555`    | nomor WhatsApp asli (format 62...)    |
| `+62 889-8964-3555`| tampilan nomor di footer & kontak     |
| `BanyuWeb`         | nama brand Anda                       |
| `halo@banyuweb.id` | email asli                            |
| `banyuweb`         | username Instagram                    |
| harga di halaman Harga & Beranda | harga asli Anda         |
| proyek di Portofolio | proyek klien asli (screenshot/URL)  |

## 4. Setelan Blogger yang disarankan
- **Setelan > Dasar > Favicon**: Opsional, Anda juga bisa mengunggah gambar logo persegi jika ingin favicon .ico khusus di Blogger. Namun template XML sudah otomatis menggunakan favicon SVG logo navbar (gradasi oranye + ikon BanyuWeb) sehingga tidak akan muncul logo standar Blogger/Blogspot lagi.
- **Setelan > Postingan > Jumlah postingan di halaman utama = 3** (kartu artikel di Beranda).
- **Setelan > Dasar > Judul**: mis. `BanyuWeb - Jasa Pembuatan Website UMKM Banyuwangi`
- **Setelan > Dasar > Deskripsi** (dipakai sebagai meta description Beranda), sebut "Banyuwangi" + jenis layanan.
- Tiap Laman: isi **Deskripsi penelusuran** (SEO) yang unik.
- Buat 3 artikel pertama (mis. "Manfaat website untuk toko oleh-oleh Banyuwangi") agar menu Blog tidak kosong.
