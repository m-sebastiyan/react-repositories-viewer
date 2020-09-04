import React, { FC } from 'react'
import { ApolloProvider } from '@apollo/client'
import styled from 'styled-components'

import Home from './pages/Home'

import apolloClient from './apolloClient'

const AppContainer = styled.div`
  padding: 30px 0;
`

const App: FC = () => (
  <AppContainer>
    <ApolloProvider client={apolloClient}>
      <Home />
    </ApolloProvider>
  </AppContainer>
)

export default App
