import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import gambar1 from '../assets/gallery/gambar1.jpg';
import gambar2 from '../assets/gallery/gambar2.jpg';
import gambar3 from '../assets/gallery/gambar3.jpg';
import gambar4 from '../assets/gallery/gambar4.jpg';
import gambar5 from '../assets/gallery/gambar5.jpg';
import gambar6 from '../assets/gallery/gambar6.jpg';

const GalleryComp = () => {
  return (
    <div className='gallery min-vh-100' id='gallery'>
      <Container fluid>
        <Row className='row g-3' xs={1} sm={1} md={2} lg={3}>
          <Col><img src={gambar1} alt="" className='w-100' /></Col>
          <Col><img src={gambar2} alt="" className='w-100' /></Col>
          <Col><img src={gambar3} alt="" className='w-100' /></Col>
          <Col><img src={gambar4} alt="" className='w-100' /></Col>
          <Col><img src={gambar5} alt="" className='w-100' /></Col>
          <Col><img src={gambar6} alt="" className='w-100' /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryComp;
