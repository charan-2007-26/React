import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import JSX from "./api.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <JSX></JSX>
  </StrictMode>,
)