import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const ServicesComp = () => {
  return (
    <div className='services min-vh-100 d-flex align-items-center' id='service'>
      <Container>
        <Row className='mb-5'>
          <Col>
            <h1 className='text-center fw-bold'>Services</h1>
            <h4 className='text-center'>Apa saja yang kami tawarkan?</h4>
          </Col>
        </Row>
        <Row className='d-flex' class xs={1} sm={1} md={2} lg={3}>
          <Col className='text-center '>
           <i class="fa-sharp fa-solid fa-coins mb-4"></i>
           <h5>Harga Terjangkau</h5>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, distinctio?</p>
          </Col>

          <Col className='text-center'>
           <i class="fa-solid fa-award mb-4"></i>
           <h5>Garansi</h5>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, distinctio?</p>
          </Col>

          <Col className='text-center '>
            <i class="fa-solid fa-clock mb-4"></i>
           <h5>Pengerjaan Cepat</h5>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, distinctio?</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ServicesComp