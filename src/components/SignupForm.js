import React, { useContext } from 'react'
import styled from 'styled-components'
import OutsideClick from 'react-outside-click-handler'

import { ModalContext } from '../hooks'

const FormDiv = styled.div`
  position: relative;
  background: white;
  width: 60%;
  margin: 0 auto;
  padding: 1rem 0;
  border-radius: 4px;

  h1 {
    margin: 1rem 0;
  }

  form {
    width: 100%;

    .input {
      width: 100%;
      padding: 10px;
      border: 1px solid teal;
      border-radius: 4px;
      font-size: 1rem;
      height: 2rem;
      margin-top: 1.5rem;

      &:focus {
        outline: none;
      }
    }

    .bttn {
      width: 40%;
      height: 2.5rem;
      padding: 5px auto;
      margin-top: 2rem;
      font-size: 1.2rem;
      background: teal;
      border: none;
      color: white;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background: green;
      }
    }
  }

  h3 {
    margin: 1rem 0 0 0;
    padding: 0;
    font-size: 1.5rem;
    cursor: pointer;
  }
`

const SignupForm = () => {
  const { modalDispatch } = useContext(ModalContext)
  return (
    <OutsideClick onOutsideClick={() => modalDispatch({ type: 'close' })}>
      <FormDiv>
        <h1>Sign Up</h1>
        <FormDiv>
          <form>
            <input
              className='input'
              type='email'
              name='email'
              placeholder='Your email address'
              autoComplete='off'
            />
            <input
              className='input'
              type='password'
              name='password'
              placeholder='Choose a save Password'
              autoComplete='off'
            />
            <input
              className='input'
              type='password'
              name='confirmPassword'
              placeholder='Confirm your Password'
              autoComplete='off'
            />
            <button className='bttn'>Submit</button>
          </form>
          <h3 onClick={() => modalDispatch({ type: 'close' })}>&times;</h3>
        </FormDiv>
      </FormDiv>
    </OutsideClick>
  )
}

export default SignupForm
