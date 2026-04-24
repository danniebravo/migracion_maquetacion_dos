import './FeatureCard.css'

function FeatureCard({ titulo, descripcion, icono }) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">{icono}</div>
      <h3 className="feature-card__title">{titulo}</h3>
      <p className="feature-card__desc">{descripcion}</p>
    </div>
  )
}

export default FeatureCard
