import React, { createContext, useReducer } from 'react'

export const ModalContext = createContext()

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return {
        ...state,
        signupOpen: true,
        signinOpen: false
      }
    case 'signin':
      return {
        ...state,
        signupOpen: false,
        signinOpen: true
      }
    case 'close':
      return {
        ...state,
        signupOpen: false,
        signinOpen: false
      }
    default:
      return state
  }
}

const initialState = {
  signupOpen: false,
  signinOpen: false
}

export const ModalProvider = ({ children }) => {
  const [modalState, modalDispatch] = useReducer(modalReducer, initialState)

  return (
    <ModalContext.Provider
      value={{
        modalState,
        modalDispatch
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
