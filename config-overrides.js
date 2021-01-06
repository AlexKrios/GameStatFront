const {override, addLessLoader, addDecoratorsLegacy} = require("customize-cra");

module.exports = override(
  addDecoratorsLegacy(),
  addLessLoader({
    javascriptEnabled: true
  }),
);