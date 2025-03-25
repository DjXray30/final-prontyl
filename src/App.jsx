import { useState } from 'react'

import Navbar from './Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mt-10">Welcome to Prontyl</h1>
      <p className="text-center mt-2">Click the button to increment the count</p>
      <div className="flex justify-center mt-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      <div className="text-center mt-10">
        <p className="text-2xl">Count: {count}</p>
      </div>
    </div>
    
   </>
  )
}

export default App
