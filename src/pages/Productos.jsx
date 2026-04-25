import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import './Productos.css'

function Productos() {
  return (
    <main className="productos-page">
      <div className="productos-page__container">
        <div className="productos-page__header">
          <h2>NUESTRA COLECCIÓN</h2>
          <p>Estilo urbano para cada ocasión</p>
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
