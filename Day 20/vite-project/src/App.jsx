import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className="text-red-600 text-3xl font-bold underline">
      Hello world!
    </h1> */}

        <Routes>
          <Route path='/home' element={<Home/>} />
        </Routes>

        

    </>
  )
}

export default App
