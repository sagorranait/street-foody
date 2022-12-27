import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaFax, FaMapMarkerAlt } from "react-icons/fa";
import ContactInfo from '../Components/ContactInfo';

function Contact() {
  return (
    <div id="main">
      <div className="main-content">
         <Container>
            <div className="contact-title">
                <h2>Contact Informations</h2>
                <p>We'd love to hear from you.</p>
            </div>
            <Row>
              <Col sm={12} md={6} lg={3} xl={3}>
                <div className="contact-info">
                  <ContactInfo icon={<FaPhoneAlt/>} title='Phone Number' text='+0123 4567 9876' />
                  <ContactInfo icon={<FaEnvelope/>} title='Email Address' text='example@gmail.com' />
                  <ContactInfo icon={<FaFax/>} title='Fax Address' text='+0123 4567 9876' />
                  <ContactInfo icon={<FaMapMarkerAlt/>} title='Location' text='Dhanmondi, BD' />
                </div>
              </Col>
              <Col sm={12} md={6} lg={9} xl={9}>
                <div className="message">
                  <h3>Send Message</h3>
                  <p>Looking for a quick answer to your question?</p>
                  <form className='message-form'>
                    <Row>
                      <Col>
                        <input type="text" name="name" id="nameInput" placeholder='Your name' required />
                      </Col>
                      <Col>
                        <input type="email" name="email" id="emailInput" placeholder='Email address' required />
                      </Col>
                    </Row>
                    <Form.Group controlId="formGridAddress2">
                      <input type="text" name="subject" id="nameInput" placeholder='Subject' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <textarea name="message" id="textareaInput" placeholder='Message' style={{height: '110px'}}></textarea>
                    </Form.Group>
                    <button type="submit" className='streetFood-btn'>Send Message</button>
                  </form>
                </div>
              </Col>
            </Row>
         </Container>
      </div>
    </div>
  )
}

export default Contact