import React from 'react'

import { ProviderComposer } from './providerComposer'
import { RouteProvider, ModalProvider, SignupProvider } from './index'

const ContextProvider = ({ children }) => {
  return (
    <ProviderComposer
      contexts={[<RouteProvider />, <ModalProvider />, <SignupProvider />]}
    >
      {children}
    </ProviderComposer>
  )
}

export default ContextProvider
