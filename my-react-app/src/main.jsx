import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CRUD from "./CRUD.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CRUD />
  </StrictMode>,
)