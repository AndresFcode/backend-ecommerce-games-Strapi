module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', ['LgHWRvKMddMtmE05tWtG+Q==']),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', ['ZnJR4BwF9yFLyV4yh4IAKA==']),
  },
  transfer: {
    toke:{
      salt: env('TRANSFER_TOKEN_SALT', ['AbVFFgQjzeVJl597D1wKLa==']),
    },
  },
});
