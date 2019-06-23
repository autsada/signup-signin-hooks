export const passwordValidation = (values, errors) => {
  if (!values.password) {
    if (!errors.email) {
      errors.password = ['Password is required.']
    }
  } else {
    errors.password = []

    if (!/^(?=.*\d)/.test(values.password)) {
      const numberError = 'Password must contain at least one number.'
      errors.password.push(numberError)
    }
    if (!/(?=.*[a-z])/.test(values.password)) {
      const lowercaseError =
        'Password must contain at least one lowercase letter.'
      errors.password.push(lowercaseError)
    }
    if (!/(?=.*[A-Z])/.test(values.password)) {
      const uppercaseError =
        'Password must contain at least one uppercase letter.'
      errors.password.push(uppercaseError)
    }
    if (!/(?=.[!@#$%^&*?+-/()<>[\]{}:;])/.test(values.password)) {
      const specialCharacterError =
        'Password must contain at least one special character.'
      errors.password.push(specialCharacterError)
    }
    if (values.password.includes(' ')) {
      const spaceError = 'Password must NOT contain space.'
      errors.password.push(spaceError)
    }
    if (values.password.length < 8) {
      const lengthError = 'Password must be at least 8 character'
      errors.password.push(lengthError)
    }
    if (values.password.length > 20) {
      const lengthError = 'Password is too long (max 20 characters).'
      errors.password.push(lengthError)
    }
    if (values.password.toLowerCase() === 'password') {
      const nameError = 'Cannot use "password" as a password'
      errors.password.push(nameError)
    }

    if (!errors.password || errors.password.length === 0) {
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Please confirm your password.'
      } else {
        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = 'Password does not match.'
        }
      }
    }
  }
  if (!values.email && !values.password && values.confirmPassword) {
    errors.confirmPassword = 'Please complete the above fields first.'
    values.confirmPassword = ''
  }

  return errors
}
