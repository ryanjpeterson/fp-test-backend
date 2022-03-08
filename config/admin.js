module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8850401750c138ce1c74e2786cb94e67'),
  },
});
