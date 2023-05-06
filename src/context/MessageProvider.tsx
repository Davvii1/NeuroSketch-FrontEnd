import { MessageContext } from "./MessageContext";
import { ReactNode, useState } from 'react';

interface MessageProviderProps {
  children: JSX.Element | JSX.Element[] | ReactNode
}

export const MessageProvider = ({ children }: MessageProviderProps) => {
  const [message, setMessage] = useState('');
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  )
}