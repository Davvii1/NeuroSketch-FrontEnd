import { LoadingContext } from "./LoadingContext";
import { ReactNode, useState } from 'react';

interface LoadingProviderProps {
  children: JSX.Element | JSX.Element[] | ReactNode
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}