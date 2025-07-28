/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com", "v0.blob.com"],
  },
  async headers() {
    return [
      {
        source: "/YordanosBogale_Resume.pdf",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Content-Disposition",
            value: 'attachment; filename="YordanosBogale_Resume.pdf"',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

