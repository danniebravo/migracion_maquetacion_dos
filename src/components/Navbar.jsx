import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/productos', label: 'Productos' },
  { to: '/contacto', label: 'Contacto' },
]

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)
  const toggleMenu = () => setMenuAbierto((prev) => !prev)

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={cerrarMenu}>
          URBAN THREADS
        </Link>

        <ul className="navbar__links">
          {NAV_LINKS.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link--active' : 'nav-link'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="navbar__hamburger"
          onClick={toggleMenu}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
        >
          {menuAbierto ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {menuAbierto && (
        <ul className="navbar__mobile-menu">
          {NAV_LINKS.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                onClick={cerrarMenu}
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link--active' : 'nav-link'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
