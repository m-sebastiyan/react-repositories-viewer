import React from 'react'
import styled from 'styled-components'

import repositoriesQuery from './graphql/repositoriesQuery'
import RepositoriesTable from './components/Table'

const HomePageContainer = styled.div`
  max-width: 1280px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  margin: 0 auto;

  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));
`

const PageTitle = styled.h1``

const Home = () => {
  const { loading, data } = repositoriesQuery()

  return (
    <HomePageContainer>
      <PageTitle>Popular React Repositories</PageTitle>
      <RepositoriesTable data={data?.search?.repos} isLoading={loading} />
    </HomePageContainer>
  )
}

export default Home
