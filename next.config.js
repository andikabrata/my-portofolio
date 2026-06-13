/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Wajib untuk static export GitHub Pages
  images: {
    unoptimized: true, // Wajib jika menggunakan komponen <Image /> dari Next.js
  },
  basePath: '/my-portofolio', // Harus diawali dengan garing (/) dan sesuai nama repo
  assetPrefix: '/my-portofolio', // Tambahkan ini jika CSS/JS kamu tidak termuat (404)
};

export default nextConfig;