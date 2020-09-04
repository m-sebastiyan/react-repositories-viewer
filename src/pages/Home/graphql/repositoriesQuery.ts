import { useQuery, gql } from '@apollo/client'

export interface Repository {
  url: string
  stargazers: {
    totalCount: number
  }
}

enum SearchType {
  ISSUE = 'ISSUE',
  REPOSITORY = 'REPOSITORY',
  USER = 'USER',
}

interface RepositorySearchData {
  search: {
    repos: { repo: Repository }[]
  }
}

interface RepositorySearchVars {
  type: SearchType
  query: string
  last: number
}

const REPOSITORIES_QUERY = gql`
  query {
    search(type: REPOSITORY, query: "topic:react", last: 50) {
      repos: edges {
        repo: node {
          ... on Repository {
            url
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`

export default () => useQuery<RepositorySearchData, RepositorySearchVars>(REPOSITORIES_QUERY)
