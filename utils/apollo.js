import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import withApollo from 'next-with-apollo'
import fetch from 'isomorphic-unfetch'

const link = createHttpLink({
    fetch,
    uri: 'http://localhost:1337/graphql',
})

export default withApollo(
    ({ initialState }) =>
        new ApolloClient({
            link: link,
            cache: new InMemoryCache().restore(initialState || {}),
        })
)
