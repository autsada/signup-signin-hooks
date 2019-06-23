export const saveUser = newUser => {
  return new Promise(function(resolve, reject) {
    const users = JSON.parse(localStorage.getItem('Users')) || []
    setTimeout(function() {
      if (users.some(user => user.email === newUser.email)) {
        reject('The email is already used.')
      } else {
        localStorage.clear()
        users.push({ email: newUser.email, password: newUser.password })
        localStorage.setItem('Users', JSON.stringify(users))
        resolve(newUser)
      }
    }, 4000)
  })
}

// abcdD1234$
