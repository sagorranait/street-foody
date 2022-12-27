function ContactInfo({icon, title, text}) {
  return (
   <div className="info">
      <div className="icon">{icon}</div>
      <div className="text">
         <h3>{title}</h3>
         <p>{text}</p>
      </div>
   </div>
  )
}

export default ContactInfo