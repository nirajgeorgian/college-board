const config = {
  db: {
    mongo: {
      uri: process.env.MONGO_URI || "mongodb://localhost/test",
    },
  },
};

export default config;
