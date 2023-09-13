import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<main>Homepage</main>}/>
        <Route path='/category' element={<main>Category display</main>} />
        <Route path='/category/:product' element={<main>Producto</main>} />
        <Route path='*' element={<main>404 Not found</main>}/>
      </Routes>

      <Footer />
    </HashRouter>
  )
}

export default App
