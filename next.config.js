const path = require("path");

module.exports = {
//   output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return "parabolas-argumentos";
  },
};
