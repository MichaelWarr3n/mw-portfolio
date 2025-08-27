import reactLogo from '../assets/react.svg'
import './Header.scss'

function Header() {
  return (
    <header class="header">
      <div class="header__left-column">
        <h1>Michael Warren</h1>
        <p class="no-margin">Front-end Developer - Bristol</p>
      </div>
      <div class="header__right-column">
        <img src={reactLogo} className="header__react-logo" alt="React logo" />
        <p class="no-margin">Powered by React.js</p>
      </div>
    </header>
  )
}

export default Header
