import { Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Search from './views/Search'
import Saved from './views/Saved'
import Configuration from './views/Configuration'
import DalleLayout from './layouts/DalleLayout'

function App() {
  return (
    <>
      <Routes>
        <Route element={<DalleLayout />}>
          <Route path='/' element={<Landing />} />
          <Route path='/search' element={<Search />} />
        </Route>
        <Route path='/saved' element={<Saved />} />
        <Route path='/configuration' element={<Configuration />} />
      </Routes>
    </>
  )
}

export default App