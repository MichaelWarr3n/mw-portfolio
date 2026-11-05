import heroImage from '../assets/neon-grid.png'
import './Hero.scss'

function Hero() {
  return (
    <div className="Hero">
      <img src={heroImage} alt="Hero" />
    </div>
  )
}

export default Hero
