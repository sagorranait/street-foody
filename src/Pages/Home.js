import { Col, Container, Row } from "react-bootstrap";
import fuchka from '../assets/fuchka.jpg';
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Home() {
  const settings = {
    className: "left",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div id="main" style={{backgroundImage: `url(${fuchka})`}}>
      <div className="overlay"></div>
      <div className="content">
        <Container>
            <Row>
              <Col sm={12} md={6} lg={6} xl={6}>
                  <div className="category-content">
                      <h1>Fuchka</h1>
                      <p>This Fuchka is usually served with tamarinds filled with spices filled with spicy potatoes in a round petal prepared by the flour and suji.</p>
                      <button className='streetFood-btn'>Browse All <span><BsArrowRight/></span></button>
                  </div>
              </Col>
              <Col sm={12} md={6} lg={6} xl={6}>
                <Slider {...settings}>
                  <Link to='/' className="category-card">
                    <span>Fuchka</span>
                  </Link>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                  <div>
                    <h3>5</h3>
                  </div>
                  <div>
                    <h3>6</h3>
                  </div>
                </Slider> 
              </Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home