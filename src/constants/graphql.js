import gql from 'graphql-tag'

export const TOP_100R_EPOS = gql`query ($queryString: String!) {
  search(query: $queryString, type: REPOSITORY, first: 100) {
    edges {
      node {
        ... on Repository {
          stargazers {
            totalCount
          }
          name
          nameWithOwner
          description
          primaryLanguage {
            name
          }
          url
          diskUsage
        }
      }
    }
  }
}`
