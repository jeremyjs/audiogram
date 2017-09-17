const graphql = require('./graphql/graphql.service.js');
const voxels = require('./voxels/voxels.service.js');

module.exports = function () {
  const app = this;
  app.configure(graphql);
  app.configure(voxels);
};
