import React from 'react'
import styled from 'styled-components'

import SignupForm from './components/SignupForm'
import SigninForm from './components/SigninForm'
import Backdrop from './components/Backdrop'

const Div = styled.div`
  margin: 0 auto;
  margin-top: -4rem;
  width: 60%;
`

const Modal = ({ state, handleClose }) => {
  const { signupOpen, signinOpen } = state
  return (
    <>
      {(signupOpen || signinOpen) && <Backdrop />}

      {signupOpen && (
        <Div>
          <SignupForm handleClose={handleClose} />
        </Div>
      )}
      {signinOpen && (
        <Div>
          <SigninForm handleClose={handleClose} />
        </Div>
      )}
    </>
  )
}

export default Modal
