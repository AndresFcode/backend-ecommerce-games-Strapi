module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', ['bVFFgQEiHjzeVcJl597D1w==']),
    },
  },
});
