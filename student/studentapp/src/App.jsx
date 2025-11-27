import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import TableView from './components/TableView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/s' element={<Signup/>}/>
        <Route path='/table' element={<TableView/>}/>

          </Routes>
    
 
    </>
  )
}

export default App
