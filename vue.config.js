module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        secure: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
  },
};
