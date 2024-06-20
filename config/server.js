module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['LqsZpPmu9S04bnypbZh5Iw==','hbWl7gpQ6o+fADit0r8L/A==','B6ubEJwCOlnNScJRlfn/8g==','iQO2TDVbPyhpxYsR/Ry3ng==']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

const nextjsDistDir = join("src", require("./src/next.config.js").distDir);
const nextjsServer = next({
  dev: isDev,
  conf: {
    distDir: nextjsDistDir,
    images: {
      domains: ['https://ecommerce-games-strapi-production.up.railway.app'],
    }
  }
});
