import './ContactInfo.css'

const INFO_ITEMS = [
  {
    titulo: 'Dirección',
    texto: <>Calle Urban Style 123<br />28001 Madrid, España</>,
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    titulo: 'Teléfono',
    texto: '+34 91 123 45 67',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.13 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
      </svg>
    ),
  },
  {
    titulo: 'Email',
    texto: 'info@urbanthreads.com',
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    titulo: 'Horario',
    texto: <>Lun - Vie: 9:00 - 18:00<br />Sáb: 10:00 - 14:00</>,
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

function ContactInfo() {
  return (
    <div className="contact-info">
      {INFO_ITEMS.map((item) => (
        <div key={item.titulo} className="contact-info__item">
          <div className="contact-info__icon">{item.icono}</div>
          <div className="contact-info__text-block">
            <h4 className="contact-info__label">{item.titulo}</h4>
            <p className="contact-info__text">{item.texto}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactInfo
