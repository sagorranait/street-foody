import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlooSamosa from '../assets/aloo-samosa.jpg'
import Pagination from '../Components/Pagination';

function Recipes() {
  return (
   <div id="main">
      <div className="main-content">
         <Container>
            <div className="main-title">
                <h2>Food Recipes</h2>
                <p>The latest and best food Recipes are selected by our editorial office.</p>
            </div>
            <Row>
               <Col sm={12} md={6} lg={3} xl={3}>
                  <div className="recipe">
                     <div className="recipe-image">
                        <img src={AlooSamosa} alt="AlooSamosa" />
                     </div>
                     <div className="recipe-content">
                        <h3>Aloo Samosa</h3>
                        <h5>Serves : 4 - 6 | Cooked : 40 mins</h5>
                        <p>Flaky and crunchy fried samosa are one of the most popular street food snack in North Asian cuisine...</p>
                        <Link to={`/recipes/details/afdadf`} className='streetFood-btn'>Recipe Details</Link>
                     </div>
                  </div>
               </Col>
               <Col sm={12} md={6} lg={3} xl={3}>
                  <div className="recipe">
                        <div className="recipe-image">
                           <img src={AlooSamosa} alt="AlooSamosa" />
                        </div>
                        <div className="recipe-content">
                           <h3>Aloo Samosa</h3>
                           <h5>Serves : 4 - 6 | Cooked : 40 mins</h5>
                           <p>Flaky and crunchy fried samosa are one of the most popular street food snack in North Asian cuisine...</p>
                           <Link to={`/recipes/details/:id`} className='streetFood-btn'>Recipe Details</Link>
                        </div>
                     </div>
               </Col>
               <Col sm={12} md={6} lg={3} xl={3}>
                  <div className="recipe">
                        <div className="recipe-image">
                           <img src={AlooSamosa} alt="AlooSamosa" />
                        </div>
                        <div className="recipe-content">
                           <h3>Aloo Samosa</h3>
                           <h5>Serves : 4 - 6 | Cooked : 40 mins</h5>
                           <p>Flaky and crunchy fried samosa are one of the most popular street food snack in North Asian cuisine...</p>
                           <Link to={`/recipes/details/:id`} className='streetFood-btn'>Recipe Details</Link>
                        </div>
                     </div>
               </Col>
               <Col sm={12} md={6} lg={3} xl={3}>
                  <div className="recipe">
                        <div className="recipe-image">
                           <img src={AlooSamosa} alt="AlooSamosa" />
                        </div>
                        <div className="recipe-content">
                           <h3>Aloo Samosa</h3>
                           <h5>Serves : 4 - 6 | Cooked : 40 mins</h5>
                           <p>Flaky and crunchy fried samosa are one of the most popular street food snack in North Asian cuisine...</p>
                           <Link to={`/recipes/details/:id`} className='streetFood-btn'>Recipe Details</Link>
                        </div>
                     </div>
               </Col>
            </Row>
            <Pagination/>
         </Container>
      </div>
   </div>
  )
}

export default Recipes