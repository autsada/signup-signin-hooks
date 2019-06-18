import React, { useContext } from 'react'
import styled from 'styled-components'

import { ModalProvider, ModalContext } from './hooks'
import Nav from './Nav'
import Modal from './Modal'

const Div = styled.div`
  margin: 0;
  padding: 0;
  color: grey;
  background: white;
`

const InnerDiv = styled.div`
  margin: 0 auto;
  width: 80%;
  text-align: center;
`

const MyApp = () => {
  const { signupOpen, signinOpen } = useContext(ModalContext)
  return (
    <Div>
      <Nav />
      <InnerDiv>
        <h1>Welcome to React Mall</h1>
        {(signupOpen || signinOpen) && <Modal />}
      </InnerDiv>
    </Div>
  )
}

const App = () => (
  <ModalProvider>
    <MyApp />
  </ModalProvider>
)

export default App
