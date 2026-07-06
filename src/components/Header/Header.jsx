import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo" aria-label="Kasa - Accueil">
        <img src={logo} alt="Kasa" className="header__logo-img" />
      </NavLink>
      <nav className="header__nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'header__link header__link--active' : 'header__link'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'header__link header__link--active' : 'header__link'
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
