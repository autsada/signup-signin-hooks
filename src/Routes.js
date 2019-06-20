import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
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
    <BrowserRouter>
      <Nav />
      <Switch>
        <InnerDiv>
          <Route exact path='/' component={HomePage} />
          <Route path='/courses' component={CoursesPage} />
          <Route path='/success' component={SuccessPage} />
          <Modal />
        </InnerDiv>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
