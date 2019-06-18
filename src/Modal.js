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
  console.log('Modal rendered')
  return (
    <>
      {(signupOpen || signinOpen) && <Backdrop />}
      <Div>
        {signupOpen && <SignupForm handleClose={handleClose} />}
        {signinOpen && <SigninForm handleClose={handleClose} />}
      </Div>
    </>
  )
}

export default Modal
