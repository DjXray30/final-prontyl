import { useState } from 'react'

import Navbar from './Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <title>Prontyl</title>
   <Navbar/>
    <div className="container w-screen h-screen flex justify-start items-end">
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">tap</button>
        Increment

      </div>
    
   </>
  )
}

export default App
