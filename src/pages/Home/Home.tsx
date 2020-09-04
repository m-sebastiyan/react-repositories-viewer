import React from 'react'

import repositoriesQuery, { Repository } from './graphql/repositoriesQuery'

const Home = () => {
  const { loading, error, data } = repositoriesQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      {data?.search?.repos.map(
        ({
          repo: {
            url,
            stargazers: { totalCount },
          },
        }: {
          repo: Repository
        }) => (
          <div key={url}>
            <p>
              {url}: {totalCount}
            </p>
          </div>
        )
      )}
    </div>
  )
}

export default Home