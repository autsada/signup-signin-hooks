import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { ModalContext, SignupContext } from '../hooks'

const Div = styled.div`
  width: 100%;
  height: 5rem;
  background: blue;
  display: flex;
  align-items: center;

  .bar {
    display: flex;
    width: 20%;
    height: 100%;
    margin: 0 3rem 0 auto;
    justify-content: space-between;
    align-items: center;

    p {
      margin-right: 1rem;
    }

    button {
      height: 60%;
      width: 7rem;
      color: white;
      font-size: 1.2rem;
      background: teal;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background: green;
      }
    }
  }
`

const DivBar = styled.div`
  width: 30%;
  margin-left: auto;

  ul {
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
      padding: 0.8rem 1.2rem;
      border-radius: 4px;

      &:hover {
        background: teal;
      }
    }

    li {
      list-style: none;
      color: white;
      font-size: 1.2rem;
      text-decoration: none;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`

const Nav = () => {
  const { modalDispatch } = useContext(ModalContext)
  const { authentication, signout } = useContext(SignupContext)

  return (
    <Div>
      <DivBar>
        <ul>
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink to='/courses'>
            <li>Courses</li>
          </NavLink>
        </ul>
      </DivBar>
      <div className='bar'>
        {authentication && (
          <>
            <p>{authentication.email}</p>
            <button onClick={signout}>Sign out</button>
          </>
        )}

        {!authentication && (
          <>
            <button onClick={() => modalDispatch({ type: 'signup' })}>
              Sign Up
            </button>
            <button onClick={() => modalDispatch({ type: 'signin' })}>
              Sign In
            </button>
          </>
        )}
      </div>
    </Div>
  )
}

export default Nav
