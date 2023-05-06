import { TokenContext } from "./TokenContext"
import { ReactNode, useState } from 'react';

interface TokenProviderProps {
  children: JSX.Element | JSX.Element[] | ReactNode
}

export const TokenProvider = ({ children }: TokenProviderProps) => {
  const [token, setToken] = useState('');
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  )
}