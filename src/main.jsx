import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// en desarrollo, el modo estricto montará y desmontará 
// componentes dos veces para ayudar a encontrar problemas. 
// Esto significa que cualquier useEffect se ejecutará dos veces.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
