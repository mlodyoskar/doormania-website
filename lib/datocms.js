import { GraphQLClient } from "graphql-request";

export function request({ query, variables, preview }) {
    console.log(process.env.NEXT_ENV_DATOCMS_API_TOKEN)

    const endpoint = preview
        ? `https://graphql.datocms.com/preview`
        : `https://graphql.datocms.com/`;

    const client = new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer ${process.env.NEXT_ENV_DATOCMS_API_TOKEN
                }`
        }
    });

    return client.request(query, variables);
}