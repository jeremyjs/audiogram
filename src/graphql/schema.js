import Resolvers from './resolvers';
import TypeDefs from './types';

import { makeExecutableSchema } from 'graphql-tools';

export const schema = makeExecutableSchema({
  TypeDefs,
  Resolvers,
});
