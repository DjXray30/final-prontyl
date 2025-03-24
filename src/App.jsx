import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={reactLogo} className="w-24 h-24 animate-spin-slow" alt="React logo" />
          </a>
        </div>
        <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Vite + React
        </h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity mb-4"
          >
            count is {count}
          </button>
          <p className="text-center text-gray-300">
            Edit <code className="bg-white/20 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-center mt-8 text-gray-400 hover:text-white transition-colors">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
