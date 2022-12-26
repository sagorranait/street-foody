import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import fuchka from '../assets/fuchka.jpg';
import fuchkaThum from '../assets/fuchka-thum.jpg';

function Home() {
  const settings = {
    className: "left",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    speed: 500,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index},`
      );
    }
  };

  return (
    <div id="main" style={{backgroundImage: `url(${fuchka})`}}>
      <div className="overlay"></div>
      <div className="content">
        <Container>
            <Row>
              <Col sm={12} md={6} lg={4} xl={4}>
                  <div className="category-content">
                      <h1>Fuchka</h1>
                      <p>This Fuchka is usually served with tamarinds filled with spices filled with spicy potatoes in a round petal prepared by the flour and suji.</p>
                      <button className='streetFood-btn'>Browse All <span><BsArrowRight/></span></button>
                  </div>
              </Col>
              <Col sm={12} md={6} lg={8} xl={8}>
                <Slider {...settings}>
                  <Link to='/' className="category-card">
                    <div className="card-content" style={{backgroundImage: `url(${fuchkaThum})`}}>
                        <div className="card-overlay"></div>
                        <span>Fuchka</span>
                    </div>
                  </Link>
                  <Link to='/' className="category-card">
                    <div className="card-content" style={{backgroundImage: `url(${fuchkaThum})`}}>
                        <div className="card-overlay"></div>
                        <span>Fuchka1</span>
                    </div>
                  </Link>
                  <Link to='/' className="category-card">
                    <div className="card-content" style={{backgroundImage: `url(${fuchkaThum})`}}>
                        <div className="card-overlay"></div>
                        <span>Fuchka2</span>
                    </div>
                  </Link>
                  <Link to='/' className="category-card">
                    <div className="card-content" style={{backgroundImage: `url(${fuchkaThum})`}}>
                        <div className="card-overlay"></div>
                        <span>Fuchka3</span>
                    </div>
                  </Link>
                </Slider> 
              </Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home