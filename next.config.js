module.exports = {
    images:{
        domains:["links.papareact.com","fakestoreapi.com"],
    },
    env:{
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

    return config;
  },
};