import React, { FC } from 'react'
import { ApolloProvider } from '@apollo/client'

import Home from './pages/Home'

import apolloClient from './apolloClient'

const App: FC = () => (
  <ApolloProvider client={apolloClient}>
    <Home />
  </ApolloProvider>
)

export default App
