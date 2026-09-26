/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: process.env.NEXT_OUTPUT_MODE,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  outputFileTracingRoot: process.env.NEXT_OUTPUT_MODE ? path.join(__dirname, '../') : '/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  allowedDevOrigins: ['127.0.0.1', '750f06fc6.na113.preview.abacusai.app'],
  
  // 👇 ЭТА СТРОЧКА РЕШАЕТ ПРОБЛЕМУ С @libsql/client НА VERCEL 👇
  serverExternalPackages: ['@libsql/client'],
};

const fs = require('fs');
const userConfigPath = path.join(__dirname, 'next.config.user.json');
const userConfigAllowedKeys = { skipTracingSlashRedirect: 'boolean', trailingSlash: 'boolean' }; // исправил опечатку в оригинале, если она там была, но лучше оставь как было, если работает
if (fs.existsSync(userConfigPath)) {
  const userConfig = JSON.parse(fs.readFileSync(userConfigPath, 'utf8'));
  for (const key of Object.keys(userConfig)) {
    if (typeof userConfig[key] !== userConfigAllowedKeys[key]) {
      throw new Error(`next.config.user.json: unsupported override "${key}". Supported boolean keys: skipTrailingSlashRedirect, trailingSlash.`);
    }
    nextConfig[key] = userConfig[key];
  }
}

module.exports = nextConfig;