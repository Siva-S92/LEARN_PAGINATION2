import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app px-10">
        <h1 className='text-4xl text-red-500 font-semibold text-center pb-2 border-b-2 mb-5'>Pagination</h1>
        <Home/>
      </div>
    </>
  )
}

export default App
