const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const hello = require('./types/hello');
// const setHello = require('./types/setHello');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello,
    },
  }),
});

module.exports = schema;
