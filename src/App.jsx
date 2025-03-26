import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <title>Prontyl</title>
   <Navbar/>
    <div className="container w-screen h-screen flex justify-start items-end">
      <Hero />

      </div>
    
   </>
  )
}

export default App
