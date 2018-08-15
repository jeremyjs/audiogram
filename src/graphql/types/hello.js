const { GraphQLString } = require('graphql');

const hello = {
  type: GraphQLString,
  resolve() {
    return 'world';
  },
};

module.exports = hello;
