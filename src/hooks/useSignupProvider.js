import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useReducer
} from 'react'
import { useImmerReducer } from 'use-immer'

import { ModalContext, RouteContext } from './index'
import {
  emailValidation,
  passwordValidation,
  validation,
  saveUser
} from '../utils'

export const SignupContext = createContext()

const initialState = {
  values: {
    email: '',
    password: '',
    confirmPassword: ''
  },
  errors: {}
}

const signupReducer = (draft, action) => {
  switch (action.type) {
    case 'ENTER_DATA': {
      draft.values[action.field] = action.value
      return
    }

    case 'ERROR': {
      draft.errors = action.errors
      return
    }

    case 'CLEAR_DATA': {
      draft.values = {
        email: '',
        password: '',
        confirmPassword: ''
      }
      draft.errors = {}
    }
  }
}

export const SignupProvider = ({ children }) => {
  const [signupState, signupDispatch] = useImmerReducer(
    signupReducer,
    initialState
  )
  const [isSubmitting, setSubmitting] = useState(false)
  const [loading, setLoading] = useState(false)
  const [authentication, setAuthentication] = useState(false)
  const [firstRender, setFirstRender] = useState(true)
  const { modalDispatch } = useContext(ModalContext)
  const { history } = useContext(RouteContext)

  const { values, errors } = signupState

  useEffect(() => {
    if (firstRender) {
      return setFirstRender(false)
    }

    const validationErrors = validation([emailValidation, passwordValidation])(
      values
    )
    signupDispatch({ type: 'ERROR', errors: validationErrors })
  }, [values, values.email, values.password, values.confirmPassword])

  const handleChange = e => {
    signupDispatch({
      type: 'ENTER_DATA',
      field: e.target.name,
      value: e.target.value
    })
  }

  const handleBlur = () => {
    const validationErrors = validation([emailValidation, passwordValidation])(
      values
    )
    signupDispatch({ type: 'ERROR', errors: validationErrors })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!values.email || !values.password || !values.confirmPassword) return

    const noErrors =
      !errors.email &&
      (!errors.password || errors.password.length === 0) &&
      !errors.confirmPassword

    if (noErrors) {
      setSubmitting(true)
      setLoading(true)
      saveDataToBackend()
      async function saveDataToBackend() {
        try {
          const newUser = await saveUser(values)

          if (newUser) {
            setAuthentication(newUser)
            modalDispatch({ type: 'close' })
            signupDispatch({ type: 'CLEAR_DATA' })
            console.log(JSON.parse(localStorage.getItem('Users')))
          }
          setLoading(false)
          setSubmitting(false)
          history.push('/success')
        } catch (error) {
          setLoading(false)
          setSubmitting(false)
          alert(error)
        }
      }
    } else {
      const validationErrors = validation([
        emailValidation,
        passwordValidation
      ])(values)
      signupDispatch({ type: 'ERROR', errors: validationErrors })
    }
  }

  const signout = () => {
    setAuthentication(false)
    history.push('/')
  }

  return (
    <SignupContext.Provider
      value={{
        values,
        handleChange,
        handleSubmit,
        loading,
        authentication,
        signout,
        errors,
        isSubmitting,
        handleBlur
      }}
    >
      {children}
    </SignupContext.Provider>
  )
}
