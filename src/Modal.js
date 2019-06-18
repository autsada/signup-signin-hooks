import React, { useContext } from 'react'
import styled from 'styled-components'

import { ModalContext } from './hooks'
import SignupForm from './components/SignupForm'
import SigninForm from './components/SigninForm'
import Backdrop from './components/Backdrop'

const Div = styled.div`
  margin: 0 auto;
  margin-top: -4rem;
  width: 60%;
`

const Modal = () => {
  const { signupOpen, signinOpen } = useContext(ModalContext)
  console.log('Modal rendered')
  return (
    <>
      {(signupOpen || signinOpen) && <Backdrop />}

      {signupOpen && (
        <Div>
          <SignupForm />
        </Div>
      )}
      {signinOpen && (
        <Div>
          <SigninForm />
        </Div>
      )}
    </>
  )
}

export default Modal
