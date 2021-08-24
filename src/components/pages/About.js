import React from 'react';
import { } from '../../assets/css/About.css';
import imgMe from '../../assets/img/tms150x214.jpg';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
     return (
          <Container className="d-flex justify-content-center mycolors">
               <Card className="mb-3 bg-dark rounded-corners cardwidth">
                    <Row className="g-0">
                         <Col md={9}>
                              <Card.Body>
                                   <Card.Title className="font-title text-warning">About Me</Card.Title>
                                   <Card.Text>
                                        I am an aspiring full stack developer with development
                                        experience in check image processing, data warehousing, general ledger, and
                                        posting applications.
                                   </Card.Text>
                                   <Card.Text>
                                        I'm thrilled to transition from mainframe into the
                                        full stack web development world. I am currently enrolled in a bootcamp at the
                                        University of Washington focusing on HTML, CSS, JavaScript, React,
                                        MySQL, Mongo, Apollo, GraphQL, Bootstrap, and more!
                                   </Card.Text>
                              </Card.Body>
                         </Col>
                         <Col md={3}>
                              <img src={imgMe} className="img-fluid rounded-corners"
                                   alt="Tami Shepard Portfolio" />
                         </Col>
                    </Row>
               </Card>
          </Container >
     );
}
