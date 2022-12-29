import { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";

const foodCategory = [
  {
    id: '01',
    title: 'Fuchka',
    description: 'This Fuchka is usually served with tamarinds filled with spices filled with spicy potatoes in a round petal prepared by the flour and suji.',
    bg_image: 'https://i.ibb.co/60H5vmb/fuchka.jpg',
    thumbnail: 'https://i.ibb.co/MVDGY62/fuchka-thum.jpg'
  },
  {
    id: '02',
    title: 'Jhaal Muri',
    description: 'This Fuchka is usually served with tamarinds filled with spices filled with spicy potatoes in a round petal prepared by the flour and suji.',
    bg_image: 'https://i.ibb.co/18k7mY1/jhaal-muri.webp',
    thumbnail: 'https://i.ibb.co/g6htnSb/jhaal-muri-thum.jpg'
  },
  {
    id: '03',
    title: 'Halim',
    description: 'This Fuchka is usually served with tamarinds filled with spices filled with spicy potatoes in a round petal prepared by the flour and suji.',
    bg_image: 'https://i.ibb.co/G5YGBrd/halim.jpg',
    thumbnail: 'https://i.ibb.co/hCPTXMY/halim-thum.webp'
  }
];

function Home() {
  const [index, setIndex] = useState(0);

  const settings = {
    className: "left",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    speed: 500,
    afterChange: function(index) {
      setIndex(index);        
    }
  };

  console.log();

  return (
    <div id="main" style={index <= 2 ? {backgroundImage: `url(${foodCategory[index].bg_image})`} : {background: '#F9A51A'}}>
      <div className="overlay"></div>
      <div className="content">
        <Container>
            <Row>
              <Col sm={12} md={6} lg={4} xl={4}>
                  <div className="category-content">
                      <h1>{index <= 2 ? foodCategory[index].title : 'All Category'}</h1>
                      <p>{index <= 2 ? foodCategory[index].description : 'Browse our all categories, It will increase your hunger.'}</p>
                      <button className='streetFood-btn'>{index <= 2 ? 'Buy Now' : 'Browse All'} <span><BsArrowRight/></span></button>
                  </div>
              </Col>
              <Col sm={12} md={6} lg={8} xl={8}>
                <Slider {...settings}>
                  {foodCategory.map(category => 
                  <Link key={category.id} to='/' className="category-card">
                    <div className="card-content" style={{backgroundImage: `url(${category.thumbnail})`}}>
                        <div className="card-overlay"></div>
                        <span>{category.title}</span>
                    </div>
                  </Link> )}
                  <Link to='/' className="category-card">
                    <div className="card-content" style={{background: '#F9A51A'}}>
                        <div className="card-overlay"></div>
                        <span>All Categories</span>
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