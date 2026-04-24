import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import './Productos.css'

const CATEGORIAS = ['Todos', 'Ropa', 'Calzado', 'Accesorios']

function Productos() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')

  const productosFiltrados =
    categoriaActiva === 'Todos'
      ? products
      : products.filter((p) => p.categoria === categoriaActiva)

  return (
    <main className="productos-page">
      <div className="productos-page__container">
        <div className="productos-page__header">
          <h2>Nuestros Productos</h2>
          <p>Descubre nuestra colección completa de ropa urbana</p>
        </div>

        <div className="productos-page__filtros">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`filtro-btn${categoriaActiva === cat ? ' filtro-btn--active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Productos
