import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import './Contacto.css'

function Contacto() {
  return (
    <main className="contacto-page">
      <div className="contacto-page__container">
        <div className="contacto-page__header">
          <h2>Contacto</h2>
          <p>¿Tienes alguna pregunta? Estamos aquí para ayudarte</p>
        </div>
        <div className="contacto-page__grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  )
}

export default Contacto
