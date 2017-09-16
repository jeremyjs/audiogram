import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import hello from './types/hello'
import setHello from './types/setHello'

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello,
    },
  }),

  mutation: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      setHello,
    },
  }),
});
