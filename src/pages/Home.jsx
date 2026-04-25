import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import './Home.css'

const FEATURES = [
  {
    titulo: 'DISEÑO ÚNICO',
    descripcion: 'Piezas exclusivas con estética urbana y minimalista',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="5" x2="8" y2="5" />
        <line x1="6" y1="3" x2="6" y2="7" />
        <path d="M14 6c3 0 5 2 5 5s-2 6-6 8c-2 1-4 1-5 0" />
        <path d="M14 6c-1 0-2 .5-2 1.5S13 9 14 9" />
        <circle cx="8" cy="17" r="1.2" />
      </svg>
    ),
  },
  {
    titulo: 'CALIDAD PREMIUM',
    descripcion: 'Materiales de alta calidad para máxima durabilidad',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <polyline points="8 12 11 15 16 10" />
      </svg>
    ),
  },
  {
    titulo: 'ENVÍO RÁPIDO',
    descripcion: 'Entrega express en 24-48 horas',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 4 14 11 14 10 22 20 10 13 10 13 2" />
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
