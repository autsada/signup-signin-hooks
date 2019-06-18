import React, { useContext } from 'react'
import styled from 'styled-components'

import { ModalContext } from './hooks'

const Div = styled.div`
  width: 100%;
  height: 5rem;
  background: blue;

  .bar {
    display: flex;
    width: 20%;
    height: 100%;
    margin: 0 3rem 0 auto;
    justify-content: space-between;
    align-items: center;

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

const Nav = () => {
  const { modalDispatch } = useContext(ModalContext)
  return (
    <Div>
      <div className='bar'>
        <button onClick={() => modalDispatch({ type: 'signup' })}>
          Sign Up
        </button>
        <button onClick={() => modalDispatch({ type: 'signin' })}>
          Sign In
        </button>
      </div>
    </Div>
  )
}

export default Nav
