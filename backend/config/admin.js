module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ce086797708e811f5e05391dda21fd55'),
  },
});
