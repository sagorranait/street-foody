import { Container } from 'react-bootstrap';

function Destination() {
  return (
   <div id="main">
      <div className="main-content">
         <Container>
            <div className="main-title">
                <h2>Service Destinations</h2>
                <p>Our all service destination shows on the map.</p>
            </div>
            <div className='destination-map'>
               <iframe title='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330415.85813732777!2d90.4205631920916!3d23.797438850188783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1672197180496!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="destination-notice">
               <p><span>Notice : </span> We are working only in Dhaka but soon we'll start in another district too.</p>
            </div>
         </Container>
      </div>
   </div>
  )
}

export default Destination