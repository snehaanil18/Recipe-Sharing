import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import AllRecipe from './Components/AllRecipe'
import AddRecipe from './Components/AddRecipe'
import ViewRecipe from './Components/ViewRecipe'
import EditRecipe from './Components/EditRecipe'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<AllRecipe/>} />
        <Route path='/add' element={<AddRecipe/>} />
        <Route path='/view/:id' element={<ViewRecipe/>} />
        <Route path='/edit/:id' element={<EditRecipe/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
