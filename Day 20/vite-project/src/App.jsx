import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className="text-red-600 text-3xl font-bold underline">
      Hello world!
    </h1> */}

        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>

        

    </>
  )
}

export default App
