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
          <Route path='/icecreams' element={<AllIceCreamsPage />} />
          <Route path='/icecreams/:iceCreamId' element={<IceCreamDetailsPage />} />
          <Route path='/new-icecream' element={<AddIceCreamPage />} />
          <Route path="/edit-icecream/:iceCreamId" element={<EditIceCreamPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
    
  )
}

export default App
