import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global-styles/index.scss'
import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import CursorTrail from './CursorTrail/CursorTrail.jsx'
import About from './About/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CursorTrail>
      <Header />
      <Hero />
    </CursorTrail>
    <About />
  </StrictMode>,
)
