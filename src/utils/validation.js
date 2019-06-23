export const validation = validationFuncArray => {
  return values => {
    let errors = {}

    validationFuncArray.map(func => func(values, errors))

    return errors
  }
}
