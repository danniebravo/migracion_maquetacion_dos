import './Nosotros.css'

const STATS = [
  { valor: '+5.000', etiqueta: 'Clientes satisfechos' },
  { valor: '+50', etiqueta: 'Productos exclusivos' },
  { valor: '4', etiqueta: 'Años de experiencia' },
  { valor: '98%', etiqueta: 'Tasa de satisfacción' },
]

const VALORES = [
  {
    titulo: 'SOSTENIBILIDAD',
    descripcion: 'Comprometidos con el planeta y la moda consciente.',
  },
  {
    titulo: 'INNOVACIÓN',
    descripcion: 'Diseños que marcan tendencia y rompen esquemas.',
  },
  {
    titulo: 'CALIDAD',
    descripcion: 'Materiales seleccionados con criterio y cuidado.',
  },
  {
    titulo: 'COMUNIDAD',
    descripcion: 'Una familia urbana en constante crecimiento.',
  },
]

function Nosotros() {
  return (
    <main>
      <section className="nosotros-banner">
        <div className="nosotros-banner__container">
          <h1 className="nosotros-banner__title">
            NUESTRA{' '}
            <span className="nosotros-banner__accent">HISTORIA</span>
          </h1>
          <p className="nosotros-banner__subtitle">
            Desde 2020 redefiniendo la moda urbana en España
          </p>
        </div>
      </section>

      <section className="nosotros-historia">
        <div className="nosotros-historia__container">
          <h2 className="nosotros-historia__title">¿Quiénes somos?</h2>
          <p className="nosotros-historia__text">
            Urban Threads nació en 2020 con una misión clara: democratizar la moda
            urbana de calidad. Lo que empezó como un pequeño taller en Madrid se ha
            convertido en una de las marcas de referencia del streetwear minimalista
            en España.
          </p>
          <p className="nosotros-historia__text">
            Creemos que el estilo no debería ser un privilegio. Cada pieza que
            diseñamos combina funcionalidad, estética y durabilidad para el día a
            día del urbanita moderno. Sin tendencias efímeras, sin fast-fashion:
            solo ropa que te acompaña de verdad.
          </p>
        </div>
      </section>

      <section className="nosotros-stats">
        <div className="nosotros-stats__container">
          {STATS.map((stat) => (
            <div key={stat.etiqueta} className="stat-card">
              <span className="stat-card__valor">{stat.valor}</span>
              <span className="stat-card__etiqueta">{stat.etiqueta}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="nosotros-valores">
        <div className="nosotros-valores__container">
          <h2 className="nosotros-valores__title">Nuestros Valores</h2>
          <div className="valores-grid">
            {VALORES.map((valor) => (
              <div key={valor.titulo} className="valor-card">
                <h3 className="valor-card__title">{valor.titulo}</h3>
                <p className="valor-card__desc">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Nosotros
