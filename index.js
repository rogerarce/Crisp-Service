const server = require('apollo-server-lambda')
import { makeExecutableSchema } from 'graphql-tools'
import glue from 'schemaglue'

const { schema, resolver } = glue('graphql')
const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolver
})

exports.graphql = server.graphqlLambda({ schema: executableSchema })
exports.graphiql = server.graphiqlLambda({ endpointURL: '/api' })
