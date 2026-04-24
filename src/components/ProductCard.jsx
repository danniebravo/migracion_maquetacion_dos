import './ProductCard.css'

function ProductCard({ nombre, precio, descripcion }) {
  const handleAnadir = () => {
    console.log(`Añadido al carrito: ${nombre} — €${precio}`)
  }

  return (
    <article className="product-card">
      <div className="product-card__image">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
      </div>
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
