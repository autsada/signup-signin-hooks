import React from 'react'
import styled from 'styled-components'

import Nav from './Nav'
import Modal from './Modal'

const Div = styled.div`
  margin: 0;
  padding: 0;
  color: grey;
  background: white;
`

const InnerDiv = styled.div`
  margin: 0 auto;
  width: 80%;
  text-align: center;
`

class App extends React.Component {
  state = {
    signupOpen: false,
    signinOpen: false
  }

  handleSignup = () => this.setState({ signupOpen: true })

  handleSignin = () => this.setState({ signinOpen: true })

  handleClose = () => this.setState({ signupOpen: false, signinOpen: false })

  render() {
    return (
      <Div>
        <Nav
          handleSignup={this.handleSignup}
          handleSignin={this.handleSignin}
        />
        <InnerDiv>
          <h1>Welcome to React Mall</h1>
          <Modal state={this.state} handleClose={this.handleClose} />
        </InnerDiv>
      </Div>
    )
  }
}
export default App
