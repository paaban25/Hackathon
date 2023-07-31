import React from 'react'
import './Footer.css'

import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const quick__Links=[
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const quick__Links2=[
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
]
const Footer = () => {

  
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo numquam cumque culpa magni aliquam, accusamus molestias, eos facere animi ad ex nihil! Debitis officiis voluptatem cumque. Maxime labore nam possimus?</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'>
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__Links.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__Links2.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className='footer__quick-links'>
              {
                  <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 mb-0 d-flex align-items-center gap-2>
                      <span>
                        <i className="ri-map-pin-line"></i>
                      </span>
                    </h6>
                    <p className='mb-0'>Sylhet,bangladesh</p>
                  </ListGroupItem>
                
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
