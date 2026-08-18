import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AllIceCreamsPage from './pages/AllIceCreamsPage'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IceCreamDetailsPage from './pages/IceCreamDetailsPage'
import AddIceCreamPage from './pages/AddIceCreamPage'
import EditIceCreamPage from './pages/EditIceCreamPage'



function App() {

  return (
    <div className='page'>
      <Header />
      <main className='content'>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/ice-creams' element={<AllIceCreamsPage />} />
          <Route path='/ice-creams/:iceCreamId' element={<IceCreamDetailsPage />} />
          <Route path='/new-ice-cream' element={<AddIceCreamPage />} />
          <Route path="/edit-ice-cream/:iceCreamId" element={<EditIceCreamPage />}
  />
        </Routes>
      </main>
      <Footer />
    </div>
    
  )
}

export default App
