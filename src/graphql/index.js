import { microGraphiql, microGraphql } from 'graphql-server-micro';
import schema from './schema';

const graphqlHandler = microGraphql({ schema });
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' });

export const getHandler = graphqlHandler;
export const postHandler = graphqlHandler;

export const graphiqlHandler;
