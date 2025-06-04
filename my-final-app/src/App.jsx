import './App.css'
import { Routes, Route } from 'react-router-dom'
import Autorization from './components/Autorization/Autarization'
import WhoWeAre from './pages/WhoWeAre/WhoWeAre'
import Contacts from './pages/Contacts/Contacts'
import Menu from './pages/Menu/Menu'
import Home from './pages/Home/Home'
import Forecast from './pages/Forecast/Forecast'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Autorization />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/home/whoWeAre' element={<WhoWeAre />}/>
        <Route path='/home/contacts' element={<Contacts />}/>
        <Route path='/home/menu' element={<Menu />}/>
        <Route path='/forecast' element={<Forecast />}/>
      </Routes>
  )
}

export default App
