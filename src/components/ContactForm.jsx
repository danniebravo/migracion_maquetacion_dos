import { useState } from 'react'
import './ContactForm.css'

const ASUNTOS = [
  'Información general',
  'Pedidos',
  'Devoluciones',
  'Colaboraciones',
]

const FORM_INICIAL = {
  nombre: '',
  apellidos: '',
  email: '',
  asunto: '',
  mensaje: '',
}

function validar(datos) {
  const errores = {}
  if (!datos.nombre.trim()) errores.nombre = 'El nombre es obligatorio.'
  if (!datos.apellidos.trim()) errores.apellidos = 'Los apellidos son obligatorios.'
  if (!datos.email.trim()) {
    errores.email = 'El email es obligatorio.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
    errores.email = 'Introduce un email válido.'
  }
  if (!datos.asunto) errores.asunto = 'Selecciona un asunto.'
  if (!datos.mensaje.trim()) errores.mensaje = 'El mensaje es obligatorio.'
  return errores
}

function guardarEnLocalStorage(datos) {
  const clave = 'urban_threads_mensajes'
  const previos = JSON.parse(localStorage.getItem(clave) || '[]')
  previos.push({ ...datos, fecha: new Date().toISOString() })
  localStorage.setItem(clave, JSON.stringify(previos))
}

function ContactForm() {
  const [formData, setFormData] = useState(FORM_INICIAL)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errores[name]) {
      setErrores((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevosErrores = validar(formData)
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }
    guardarEnLocalStorage(formData)
    console.log('Mensaje enviado:', formData)
    setEnviado(true)
    setFormData(FORM_INICIAL)
    setErrores({})
  }

  return (
    <div className="contact-form">
      <div className="contact-form__demo-alert">
        Demo: Este es un formulario de demostración. Los mensajes no se enviarán realmente.
      </div>

      {enviado && (
        <div className="contact-form__success">
          Mensaje enviado correctamente. ¡Gracias por contactar con nosotros!
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              className={errores.nombre ? 'input--error' : ''}
            />
            {errores.nombre && (
              <span className="contact-form__error">{errores.nombre}</span>
            )}
          </div>
          <div className="contact-form__field">
            <label htmlFor="apellidos">Apellidos</label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              placeholder="Tus apellidos"
              className={errores.apellidos ? 'input--error' : ''}
            />
            {errores.apellidos && (
              <span className="contact-form__error">{errores.apellidos}</span>
            )}
          </div>
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className={errores.email ? 'input--error' : ''}
          />
          {errores.email && (
            <span className="contact-form__error">{errores.email}</span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="asunto">Asunto</label>
          <select
            id="asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            className={errores.asunto ? 'input--error' : ''}
          >
            <option value="">Selecciona un asunto</option>
            {ASUNTOS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          {errores.asunto && (
            <span className="contact-form__error">{errores.asunto}</span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            rows={5}
            className={errores.mensaje ? 'input--error' : ''}
          />
          {errores.mensaje && (
            <span className="contact-form__error">{errores.mensaje}</span>
          )}
        </div>

        <button type="submit" className="contact-form__submit">
          ENVIAR MENSAJE
        </button>
      </form>
    </div>
  )
}

export default ContactForm
