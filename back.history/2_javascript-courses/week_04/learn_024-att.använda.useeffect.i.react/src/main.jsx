import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Ta bort StrictMode för att renderingen endast ska ske en gång vid start.
createRoot(document.getElementById('root')).render(
  
  <App />
  
)
