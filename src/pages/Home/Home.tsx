import React from 'react'

import repositoriesQuery from './graphql/repositoriesQuery'
import RepositoriesTable from './components/Table'

const Home = () => {
  const { loading, data } = repositoriesQuery()

  return <RepositoriesTable data={data?.search?.repos} isLoading={loading} />
}

export default Home
