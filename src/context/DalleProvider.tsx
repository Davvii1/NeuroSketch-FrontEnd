import { DalleContext } from "./DalleContext"
import { useState } from 'react';

interface DalleProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const DalleProvider = ({ children }: DalleProviderProps) => {
  const [search, setSearch] = useState<string>('');
  return (
    <DalleContext.Provider value={{ search, setSearch }}>
      {children}
    </DalleContext.Provider>
  )
}
