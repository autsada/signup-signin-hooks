import React, { createContext } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

export const RouteContext = createContext()

export const RouteProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <Route>
        {props => (
          <RouteContext.Provider value={props}>
            {children}
          </RouteContext.Provider>
        )}
      </Route>
    </BrowserRouter>
  )
}
