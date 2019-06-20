import React from 'react'
import { NavLink } from 'react-router-dom'

const SuccessPage = () => {
  return (
    <h3>
      You sign up successfully,{' '}
      <span>
        <NavLink to='/courses'>go to courses</NavLink>
      </span>
    </h3>
  )
}

export default SuccessPage
