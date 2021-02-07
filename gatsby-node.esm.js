import write from 'write'
import { introspectionQuery, graphql, printSchema } from 'gatsby/graphql'

exports.onPostBootstrap = async ({ store }) => {
  try {
    const { schema } = store.getState()
    const jsonSchema = await graphql(schema, introspectionQuery)
    const sdlSchema = printSchema(schema)

    write.sync('schema.json', JSON.stringify(jsonSchema.data), {})
    write.sync('schema.graphql', sdlSchema, {})
  } catch (error) {
    console.error(
      '\n\n[gatsby-plugin-extract-schema] Failed to write schema: ',
      error,
      '\n'
    )
  }
}
