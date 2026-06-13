/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Wajib agar Next.js menghasilkan folder HTML statis ('out')
  images: {
    unoptimized: true, // Wajib jika kamu menggunakan komponen <Image /> dari Next.js
  },
  basePath: '/my-portofolio', // Wajib diisi sesuai nama repository GitHub kamu
};

export default nextConfig;