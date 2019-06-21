import React from 'react'
import styled from 'styled-components'

import ContextProvider from './hooks/state'
import Routes from './Routes'

const Div = styled.div`
  margin: 0;
  padding: 0;
  color: grey;
  background: white;
  font-family: sans-serif;
`

const App = () => {
  return (
    <ContextProvider>
      <Div>
        <Routes />
      </Div>
    </ContextProvider>
  )
}

export default App
