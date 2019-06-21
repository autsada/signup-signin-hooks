import React, { createContext, useContext } from 'react'

import { RouteContext, ModalContext } from './index'

export const SignupContext = createContext()

export const SignupProvider = ({ children }) => {
  const { history } = useContext(RouteContext)
  const { modalDispatch } = useContext(ModalContext)

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form is submitted')
    modalDispatch({ type: 'close' })
    history.push('/success')
  }
  return (
    <SignupContext.Provider value={{ handleSubmit }}>
      {children}
    </SignupContext.Provider>
  )
}
