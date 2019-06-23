import React, { useState, createContext, useContext } from 'react'

import { ModalContext, RouteContext } from './index'
import {
  emailValidation,
  passwordValidation,
  validation,
  saveUser
} from '../utils'

export const SignupContext = createContext()

const initialValues = {
  email: '',
  password: '',
  confirmPassword: ''
}

export const SignupProvider = ({ children }) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)
  const [loading, setLoading] = useState(false)
  const [authentication, setAuthentication] = useState(false)
  const { modalDispatch } = useContext(ModalContext)
  const { history } = useContext(RouteContext)

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleBlur = () => {
    const validationErrors = validation([emailValidation, passwordValidation])(
      values
    )
    setErrors(validationErrors)
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
      saveDataToBackend()

      async function saveDataToBackend() {
        setLoading(true)
        try {
          const newUser = await saveUser(values)

          if (newUser) {
            setAuthentication(newUser)
            modalDispatch({ type: 'close' })
            setValues(initialValues)
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
      setErrors(validationErrors)
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
        setValues,
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
