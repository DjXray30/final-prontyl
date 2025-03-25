import { useState } from 'react'

import Navbar from './Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <p>I am a disco dancer</p>
   </>
  )
}

export default App
