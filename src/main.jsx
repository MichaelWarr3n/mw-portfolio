import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global-styles/index.scss'
import Header from './Header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
