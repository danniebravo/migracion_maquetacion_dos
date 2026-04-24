import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          ESTILO URBANO{' '}
          <span className="hero__highlight">REDEFINIDO</span>
        </h1>
        <p className="hero__subtitle">
          Descubre nuestra colección exclusiva de ropa urbana minimalista
        </p>
        <Link to="/productos" className="hero__cta">
          EXPLORAR COLECCIÓN
        </Link>
      </div>
    </section>
  )
}

export default Hero
