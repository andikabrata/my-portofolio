/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Wajib agar Next.js menghasilkan HTML statis
  images: {
    unoptimized: true, // Wajib jika kamu menggunakan komponen <Image /> bawaan Next.js
  },
  basePath: '/my-portofolio', // Sesuaikan dengan nama repository GitHub kamu
  assetPrefix: '/my-portofolio', // Mengatasi file CSS/JS agar tidak 404 saat di-deploy
};

export default nextConfig;