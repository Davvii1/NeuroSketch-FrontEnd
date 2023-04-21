import { Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Search from './views/Search'
import Saved from './views/Saved'
import Configuration from './views/Configuration'
import { DalleProvider } from './context/DalleProvider'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/search' element={<Search />} />
      <Route path='/saved' element={<Saved />} />
      <Route path='/configuration' element={<Configuration />} />
    </Routes>
  )
}

export default App