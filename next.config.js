/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

}

module.exports = {
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com']
  },
  env: {
    rapidApi_key: '295d2a03bemsh028c4896ca2bc2dp16ddfajsn81d638536bd8'
  }
}
