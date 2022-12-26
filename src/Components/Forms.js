import { Col, Container, Row } from 'react-bootstrap'
import { FaGoogle } from "react-icons/fa";

function Forms({ title, description, children }) {
  return (
   <section id='inputForm'>
      <Container>
         <Row>
            <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
               <div className="form-inputs">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  {children}
                  <div className="user-platform">
                     <h4>Or sign in with</h4>
                     <button><FaGoogle/> <span>Continue with Google</span></button>
                  </div>
               </div>
            </Col>
         </Row>
      </Container>
   </section>
  )
}

export default Forms