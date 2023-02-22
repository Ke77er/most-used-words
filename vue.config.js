module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    disableHostCheck: true,
    public: "localhost:8080",
    headers: { "Access-Control--Origin": "*" },
  },
};
