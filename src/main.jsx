import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './styles/index.css' // Updated path
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <App />
    
  </StrictMode>,
)
