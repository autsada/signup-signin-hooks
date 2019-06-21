import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import HomePage from './pages/HomePage'
import Modal from './components/Modal'
import Nav from './pages/Nav'
import CoursesPage from './pages/CoursesPage'
import SuccessPage from './pages/SuccessPage'

const InnerDiv = styled.div`
  margin: 3rem auto 0 auto;
  width: 80%;
  text-align: center;
`

const Routes = () => {
  return (
    <>
      <Nav />
      <Switch>
        <InnerDiv>
          <Route exact path='/' component={HomePage} />
          <Route path='/courses' component={CoursesPage} />
          <Route path='/success' component={SuccessPage} />
          <Modal />
        </InnerDiv>
      </Switch>
    </>
  )
}

export default Routes
