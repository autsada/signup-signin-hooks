import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.65);
`

const Backdrop = () => {
  return <Div />
}

export default Backdrop
