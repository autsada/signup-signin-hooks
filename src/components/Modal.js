import React, { useContext } from 'react'
import styled from 'styled-components'

import { ModalContext } from '../hooks'
import SignupForm from './SignupForm'
import SigninForm from './SigninForm'
import Backdrop from './Backdrop'

const Div = styled.div`
  margin: 0 auto;
  margin-top: -6rem;
  width: 60%;
`

const Modal = props => {
  const { modalState } = useContext(ModalContext)
  const { signupOpen, signinOpen } = modalState

  if (!signupOpen && !signinOpen) return null
  console.log(props)
  return (
    <>
      <Backdrop />

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
