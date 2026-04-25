import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import './Home.css'

const FEATURES = [
  {
    titulo: 'DISEÑO ÚNICO',
    descripcion: 'Piezas exclusivas con estética urbana y minimalista',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    ),
  },
  {
    titulo: 'CALIDAD PREMIUM',
    descripcion: 'Materiales de alta calidad para máxima durabilidad',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    titulo: 'ENVÍO RÁPIDO',
    descripcion: 'Entrega express en 24-48 horas',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
]

function Home() {
  return (
    <main>
      <Hero />

      <section className="features">
        <div className="features__container">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.titulo} {...feature} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
