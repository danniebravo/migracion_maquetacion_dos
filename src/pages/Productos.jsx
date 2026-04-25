import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import './Productos.css'

function Productos() {
  return (
    <main className="productos-page">
      <div className="productos-page__container">
        <div className="productos-page__header">
          <h2>Nuestros Productos</h2>
          <p>Descubre nuestra colección completa de ropa urbana</p>
        </div>

        <div className="products-grid">
          {products.map((producto) => (
            <ProductCard key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Productos
