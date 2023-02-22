import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../../assets/Logo.svg'

function Header() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={Logo} alt="Logo" className="nav__img" />
      </Link>
      <div className="nav__link">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </nav>
  )
}

export default Header
