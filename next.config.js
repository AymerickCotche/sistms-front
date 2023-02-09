/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['diamond-eu-prod.s3.amazonaws.com', 'static.materiel-horeca.com', 'www.restoconcept.com', 'www.stock-direct-chr.com', 'polibox.com', '©www.restoconcept.com', 'www.stockresto.com', 'www.rollergrill-international.com', 'www.roller-grill.be', 'www.112horeca.nl', 'www.furnotel.fr'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.diamond-eu.com',
        port: '',
        pathname: '*',
      },
    ],
  },
}

module.exports = nextConfig
