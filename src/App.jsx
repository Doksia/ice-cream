import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AllIceCreamsPage from './pages/AllIceCreamsPage'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IceCreamDetailsPage from './pages/IceCreamDetailsPage'
import AddIceCreamPage from './pages/AddIceCreamPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/ice-creams' element={<AllIceCreamsPage />} />
        <Route path='/ice-creams/:iceCreamId' element={<IceCreamDetailsPage />} />
        <Route path='/new-ice-cream' element={<AddIceCreamPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
