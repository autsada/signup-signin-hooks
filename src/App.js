import React from 'react'
import styled from 'styled-components'

import { ModalProvider } from './hooks'
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
    <ModalProvider>
      <Div>
        <Routes />
      </Div>
    </ModalProvider>
  )
}

export default App
