import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
const Content = () => {
  return (
    <div>
         <Container fluid className="px-5">
        <Row>
          <Col className="col-md-3 py-3 col-12 top-card">
            <Card style={{ width: "250px",backgroundColor:"lightgreen" ,boxShadow:'3px 2px 5px black'}}>
              <Card.Img className="img" variant="top" src="/img/tajmahal.jpg"/>
              <Card.Body>
                <Card.Title style={{color:'red'}}>Taj Mahal</Card.Title>
                <Card.Text style={{color:'blue'}}>
                 UttarPradesh,India
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className=" col-md-3 py-3 col-12">
            <Card style={{ width: "250px",boxShadow:'3px 2px 5px black' }}>
              <Card.Img className="img" variant="top" src="/img/rio.jpg" />
              <Card.Body>
                <Card.Title style={{color:'red'}}>Chirst the Redeemer</Card.Title>
                <Card.Text style={{color:'blue'}}>
                 Rio de Janeiro, Brazil
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className=" col-md-3 py-3 col-12">
            <Card style={{ width: "250px",boxShadow:'3px 2px 5px black'}}>
              <Card.Img className="img" variant="top" src="/img/collassuem.jpg" />
              <Card.Body>
                <Card.Title style={{color:'red'}}>Collassuem</Card.Title>
                <Card.Text style={{color:'blue'}}>
                 Peru
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-3 py-3 col-12">
            <Card style={{ width: "250px",boxShadow:'3px 2px 5px black' }}>
              <Card.Img className="img" variant="top" src="/img/machupichu.jpg" />
              <Card.Body>
                <Card.Title style={{color:'red'}}>Machu Pichu</Card.Title>
                <Card.Text style={{color:'blue'}}>
                 Rome,Italy
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Content