import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import SomosaThum from '../assets/aloo-samosa-thum.jpg';
import { CiAlarmOn, CiForkAndKnife, CiTimer, CiMemoPad } from "react-icons/ci";

function RecipeDetails() {
  return (
    <div id="main">
      <div className="main-content">
        <Container>
          <div className="resipe-details-image">
            <Row>
              <Col sm={12} md={8} lg={9} xl={9}>
                <img src={SomosaThum} alt="aloo-samosa-thum" />
              </Col>
              <Col sm={12} md={4} lg={3} xl={3}>
                  <div className="resipe-info">
                    <ul>
                      <li><span><CiAlarmOn/></span> <p>Prep : 30 mins</p></li>
                      <li><span><CiMemoPad/></span> <p>More Effort</p></li>
                      <li><span><CiForkAndKnife/></span> <p>Serves : 5-8</p></li>
                      <li><span><CiTimer/></span> <p>Cook : 1 hr 10 mins</p></li>
                    </ul>
                  </div>
              </Col>
            </Row>
          </div>
          <div className="resipe-details-content">
            <Row>
              <Col sm={12} md={4} lg={3} xl={3}>
                <div className="resipe-ingredients">
                  <h3>Ingredients</h3>
                  <div className="ingredients-text">
                    <ol>
                      <li>1 tbsp vegetable oil</li>
                      <li>1 onion, finely chopped</li>
                      <li>2 garlic cloves, crushed</li>
                      <li>1 potato (about 150g) finely diced</li>
                      <li>1 carrot (about 100g) finely diced</li>
                      <li>100g frozen peas</li>
                      <li>2 tsp curry powder (according to taste)</li>
                      <li>100ml vegetable stock</li>
                      <li>225g plain flour</li>
                      <li>2 tsp sea salt</li>
                      <li>2 tbsp vegetable oil</li>
                      <li>2l vegetable oil to deep fry</li>
                    </ol>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={8} lg={9} xl={9}>
                <div className="resipe-method">
                  <h3>Method</h3>
                  <div className="method-text">
                    <p><b>STEP 1 : </b>To make the filling, heat the oil in a frying pan, add the onion and garlic, mix in the spices and fry for 10 mins until soft. Add the vegetables, seasoning and stir well until coated. Add the stock, cover and simmer for 30 mins until cooked. Leave to cool.</p>
                    <p><b>STEP 2 : </b>To make the pastry, mix flour and salt into a bowl. Make a well in the centre, add the oil and 100ml water to make a firm dough. Knead the dough on a floured surface for 5-10 mins until smooth and roll into a ball. Cover in cling film and set aside at room temperature for 30 mins.</p>
                    <p><b>STEP 3 : </b>Divide the pastry into 12 equal pieces. Roll each piece into a ball and roll out into a circle of 15cm. Divide this circle into two equal pieces with a knife.</p>
                    <p><b>STEP 4 : </b>Brush each edge with a little water and form a cone shape around your fingers, sealing the dampened edge. Fill with 1 tbsp mixture and press the two dampened edges together to seal the top of the cone. Repeat with the remaining pastry.</p>
                    <p><b>STEP 5 : </b>Heat the oil in a large deep saucepan to 180C. The oil should come 1/3rd of the way up the pan. Deep fry the samosas in batches for 8-10 mins until crisp and brown. Take out and drain on kitchen paper.</p>
                    <p><b>STEP 6 : </b>Heat the oil in a large deep saucepan to 180C. The oil should come 1/3rd of the way up the pan. Deep fry the samosas in batches for 8-10 mins until crisp and brown. Take out and drain on kitchen paper.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default RecipeDetails