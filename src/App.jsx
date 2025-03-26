import { useState } from 'react'
import Navbar from './Navbar'
import CustomVideoComponent from './VoteCard'

function App() {
  return (
    <>
    <title>Prontyl</title>
   <Navbar/>
    <div className="container w-screen h-screen flex justify-start items-end">
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">tap</button>
        Increm

      </div>
    <CustomVideoComponent/>
   </>
  )
}

export default App