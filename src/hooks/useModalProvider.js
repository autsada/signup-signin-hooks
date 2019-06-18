import React, { createContext, useState } from 'react'

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [signupOpen, setSignupOpen] = useState(false)
  const [signinOpen, setSigninOpen] = useState(false)

  const handleSignup = () => setSignupOpen(true)

  const handleSignin = () => setSigninOpen(true)

  const handleClose = () => {
    setSignupOpen(false)
    setSigninOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        signinOpen,
        signupOpen,
        handleSignup,
        handleSignin,
        handleClose
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
