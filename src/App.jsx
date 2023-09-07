import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'

function App() {

  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path='/' element={<p>Homepage</p>}/>
        <Route path='/category' element={<p>Category display</p>} />
        <Route path='/category/product' element={<p>Producto</p>} />
        <Route path='*' element={<p>404 Not found</p>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
