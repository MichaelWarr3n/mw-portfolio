import reactLogo from '../assets/react.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <div className="header__left-column">
        <h1>Michael Warren</h1>
        <p className="no-margin">Front-end Developer - Bristol</p>
      </div>
      <div className="header__right-column">
        <img src={reactLogo} className="header__react-logo" alt="React logo" />
        <p className="no-margin">Powered by React.js</p>
      </div>
    </header>
  )
}

export default Header
