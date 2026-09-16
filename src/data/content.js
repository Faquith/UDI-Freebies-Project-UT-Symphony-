// =============================================================================
// content.js — satu-satunya file yang perlu kamu edit untuk mengganti konten.
//
// Untuk mengganti gambar:
//   1. Taruh file gambar baru di folder src/assets/ (mis. freebie-1.png)
//   2. Ganti baris "import" di bawah supaya menunjuk ke file itu
//   3. Import yang sudah dipakai di array akan otomatis ikut berubah
// =============================================================================

import Logo from "../assets/logo.png";
import discordLogo from "../assets/discord-logo.png";
import whatsappLogo from "../assets/whatsapp-logo.png";

import freebie1 from "../assets/freebie-1.png";
import freebie2 from "../assets/freebie-2.png";
import freebie3 from "../assets/freebie-3.png";
import freebie4 from "../assets/freebie-4.png";

import artist1 from "../assets/artist-1.png";
import artist2 from "../assets/artist-2.png";
import artist3 from "../assets/artist-3.png";
import artist4 from "../assets/artist-4.png";
import artist5 from "../assets/artist-5.png";

import kontributor1 from "../assets/kontributor-1.png";
import kontributor2 from "../assets/kontributor-2.png";
import kontributor3 from "../assets/kontributor-3.png";

import backgroundPlaceholder from "../assets/background.svg";

// -----------------------------------------------------------------------------
// 1. Judul acara & nama komunitas
// -----------------------------------------------------------------------------
export const EVENT_TITLE = "UNDERTALE SYMPHONY JAKARTA";
export const COMMUNITY_NAME = "Undertale & Deltarune Indonesia";

// Ikon/logo kecil di samping kiri nama komunitas.
// Ganti `placeholder` dengan import logo kamu sendiri, contoh:
// import communityIcon from "../assets/community-icon.png";
export const COMMUNITY_ICON = Logo;

// Logo Discord & WhatsApp di tombol "UDI Discord Server" / "UDI Whatsapp Group".
export const DISCORD_ICON = discordLogo;
export const WHATSAPP_ICON = whatsappLogo;

// -----------------------------------------------------------------------------
// 2. Background halaman
// Ganti `backgroundPlaceholder` dengan import gambar background kamu sendiri,
// contoh: import background from "../assets/background.png";
// -----------------------------------------------------------------------------
export const BACKGROUND_IMAGE = backgroundPlaceholder;

// -----------------------------------------------------------------------------
// 3. Freebie slider — harus tepat 4 item
// -----------------------------------------------------------------------------
export const freebies = [
  { image: freebie1, artist: "tiadstart" },
  { image: freebie2, artist: "Sabita Onitsuga" },
  { image: freebie3, artist: "Itz_Yetchaaa" },
  { image: freebie4, artist: "yoshi_dzn" },
];

// -----------------------------------------------------------------------------
// 4. Collab Team (Artist) — tambah/kurangi jumlah sesuka hati
// `link` = URL portofolio/akun (Instagram, VGen, Twitter, dll).
// Kalau dikosongkan (""), kartunya tidak bisa diklik.
// -----------------------------------------------------------------------------
export const artists = [
  {
    name: "tiadstart (Artist)",
    image: artist1,
    link: "https://vgen.co/tiadstart/portfolio",
  },
  {
    name: "Sabita Onitsuga (Lead Artist)",
    image: artist2,
    link: "https://sabitaonitsuga.carrd.co/",
  },
  {
    name: "Itz_Yetchaaa (Artist)",
    image: artist3,
    link: "https://linktr.ee/Yetchaah",
  },
  {
    name: "yoshi_dzn (Artist)",
    image: artist4,
    link: "https://www.instagram.com/y0shi.i",
  },
  {
    name: "Faquith_ (Web Designer & Coordinator)",
    image: artist5,
    link: "https://www.instagram.com/faquith_/",
  },
];

// -----------------------------------------------------------------------------
// 5. Special Thanks / Kontributor — tambah/kurangi jumlah sesuka hati
// `link` juga opsional, sama seperti di atas.
// -----------------------------------------------------------------------------
export const contributors = [
  { name: "MT Hermawan", image: kontributor1, link: "" },
  { name: "galuh.misyel", image: kontributor2, link: "" },
  { name: "UDI", image: kontributor3, link: "https://discord.gg/dE2BN2aQsM" },
];

// -----------------------------------------------------------------------------
// 6. Link sosial media & komunitas
// -----------------------------------------------------------------------------
export const socialLinks = {
  instagram: "https://www.instagram.com/utdr_id/",
  twitter: "https://x.com/utdr_id?s=20",
  discord: "https://discord.gg/dE2BN2aQsM",
  facebook: "https://www.facebook.com/share/g/1DNB4BpxVj/",
  whatsapp: "https://chat.whatsapp.com/udi-example",
};
