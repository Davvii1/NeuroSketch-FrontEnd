import { DalleContext } from "./DalleContext"
import { ReactNode, useState } from 'react';

interface DalleProviderProps {
  children: JSX.Element | JSX.Element[] | ReactNode
}

export const DalleProvider = ({ children }: DalleProviderProps) => {
  const [search, setSearch] = useState('');
  return (
    <DalleContext.Provider value={{ search, setSearch }}>
      {children}
    </DalleContext.Provider>
  )
}
