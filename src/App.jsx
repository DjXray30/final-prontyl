import { useState } from 'react'

import Navbar from './Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <title>Prontyl</title>
   <Navbar/>
    <div className="container w-screen h-screen flex justify-start items-end">
      

      </div>
    
   </>
  )
}

export default App
