import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TokenProvider } from './context/TokenProvider';
import { UserProvider } from './context/UserProvider';
import { LoadingProvider } from './context/LoadingProvider'
import { MessageProvider } from './context/MessageProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <TokenProvider>
      <UserProvider>
        <LoadingProvider>
          <MessageProvider>
            <App />
          </MessageProvider>
        </LoadingProvider>
      </UserProvider>
    </TokenProvider>
  </BrowserRouter>,
)
