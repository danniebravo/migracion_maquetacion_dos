import './ProductCard.css'

const ICONS = {
  1: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="6" height="18" rx="3" />
      <rect x="13" y="3" width="6" height="18" rx="3" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="3" x2="15" y2="18" />
      <circle cx="9" cy="10" r="2" />
      <circle cx="15" cy="13" r="2" />
      <path d="M9 18c0 1.5-.5 2.5-1.5 3" />
      <path d="M15 18c0 1.5.5 2.5 1.5 3" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
    </svg>
  ),
  5: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3a13 13 0 010 18" />
      <path d="M12 3a13 13 0 000 18" />
    </svg>
  ),
  6: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 16 14" />
    </svg>
  ),
}

function ProductCard({ id, nombre, precio, descripcion }) {
  const handleAnadir = () => {
    console.log(`Añadido al carrito: ${nombre} — €${precio}`)
  }

  return (
    <article className="product-card">
      <div className="product-card__image">{ICONS[id]}</div>
      <div className="product-card__content">
        <h3 className="product-card__name">{nombre}</h3>
        <p className="product-card__desc">{descripcion}</p>
        <div className="product-card__footer">
          <span className="product-card__price">€{precio}</span>
          <button onClick={handleAnadir} className="product-card__btn">
            AÑADIR
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
