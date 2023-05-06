import { Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Login from './views/Login'
import Register from './views/Register'
import Search from './views/Search'
import Saved from './views/Saved'
import Configuration from './views/Configuration'
import DalleLayout from './layouts/DalleLayout'
import Cookies from 'universal-cookie';
import { getUserRequest, tokenRequest } from './requests/auth'
import { useContext, useEffect } from 'react'
import { TokenContext } from './context/TokenContext'
import { UserContext } from './context/UserContext'
import Protected from './components/Protected'
import NavbarLayout from './layouts/NavbarLayout'
import TokenLayout from './layouts/TokenLayout'

function App() {
  const cookies = new Cookies();
  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);

  const checkAuth = async () => {
    const refreshToken = cookies.get('refreshToken');
    if (refreshToken) {
      const r = await tokenRequest(refreshToken);
      setToken(r.data.authToken);
      cookies.set('refreshToken', r.data.refreshToken);
      const u = await getUserRequest(r.data.authToken);
      setUser(u.data);
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <>
      <Routes>
        <Route element={<TokenLayout />}>
          <Route element={<DalleLayout />}>
            <Route path='/' element={<Landing />} />
            <Route path='/search' element={<Search />} />
          </Route>
          <Route
            path='/login'
            element={
              <Protected isLoggedIn={cookies.get('refreshToken') == undefined}>
                <Login />
              </Protected>
            }
          />
          <Route element={<NavbarLayout />}>
            <Route
              path='/saved'
              element={
                <Protected isLoggedIn={cookies.get('refreshToken') != undefined}>
                  <Saved />
                </Protected>
              }
            />
            <Route
              path='/configuration'
              element={
                <Protected isLoggedIn={cookies.get('refreshToken') != undefined}>
                  <Configuration />
                </Protected>
              }
            />
          </Route>
          <Route
            path='/register'
            element={
              <Protected isLoggedIn={cookies.get('refreshToken') == undefined}>
                <Register />
              </Protected>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App