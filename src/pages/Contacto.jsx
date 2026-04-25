import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import './Contacto.css'

function Contacto() {
  return (
    <main className="contacto-page">
      <div className="contacto-page__container">
        <div className="contacto-page__header">
          <h2>CONTACTO</h2>
          <p>¿Tienes alguna pregunta? Nos encantaría escucharte</p>
        </div>
        <div className="contacto-page__grid">
          <div>
            <h3 className="contacto-page__section-title">INFORMACIÓN DE CONTACTO</h3>
            <ContactInfo />
          </div>
          <div>
            <h3 className="contacto-page__section-title">ENVÍANOS UN MENSAJE</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contacto
