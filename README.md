# Undertale Symphony Jakarta — Website Komunitas

Microsite satu halaman untuk acara komunitas Undertale & Deltarune Indonesia.
Dibuat dengan React + Vite + Tailwind CSS.

## Menjalankan di komputer kamu

Butuh [Node.js](https://nodejs.org/) versi 18 ke atas.

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

Untuk build versi production (siap upload ke hosting):

```bash
npm run build
```

Hasilnya ada di folder `dist/`, tinggal upload ke hosting mana pun (Netlify,
Vercel, GitHub Pages, cPanel, dll).

## Cara mengedit konten

**Cukup edit satu file:** `src/data/content.js`

Di situ kamu bisa ganti:
- Judul acara & nama komunitas
- Ikon/logo kecil di samping nama komunitas (`COMMUNITY_ICON`)
- Gambar background
- 4 gambar freebie beserta nama artist-nya
- Daftar artist (foto, nama, deskripsi singkat)
- Daftar special thanks / kontributor
- Semua link (Instagram, Twitter, Discord, Facebook, WhatsApp)

## Cara mengganti gambar

1. Taruh file gambar baru (`.png`/`.jpg`/`.webp`) di folder `src/assets/`.
2. Di `src/data/content.js`, ganti baris `import` di bagian atas supaya
   menunjuk ke file barumu, misalnya:

   ```js
   import freebie1 from "../assets/freebie-1.png";
   ```

3. Pakai variabel itu di array yang sesuai (`freebies`, `artists`,
   `contributors`, atau `BACKGROUND_IMAGE`).

Semua gambar saat ini masih placeholder (`placeholder.svg` dan
`background.svg`) supaya project bisa langsung dijalankan tanpa error
sebelum kamu ganti dengan aset asli.

## Struktur folder

```
src/
├── components/
│   ├── Header.jsx          -> judul acara
│   ├── FreebieSlider.jsx   -> carousel freebie
│   ├── ArtistSection.jsx   -> tombol + modal artist & kontributor
│   ├── SocialLinks.jsx     -> grid link sosial media + modal "Our Social Media"
│   └── Modal.jsx           -> komponen modal generik, dipakai ulang
├── data/
│   └── content.js          -> SATU-SATUNYA file yang perlu kamu edit
├── assets/                 -> taruh gambar-gambar kamu di sini
├── App.jsx                 -> menyusun semua section jadi satu halaman
├── main.jsx                -> entry point React
└── index.css                -> Tailwind + sedikit CSS global
```

Tidak ada backend/database — murni frontend statis.
