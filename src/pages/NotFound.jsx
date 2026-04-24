import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1rem' }}>404 — Página no encontrada</h2>
      <Link to="/" style={{ color: '#f59e0b', fontWeight: 600 }}>
        Volver al inicio
      </Link>
    </main>
  )
}

export default NotFound
