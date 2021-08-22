import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { } from "./MyCard.css";

export default function MyCard(props) {
     return (
          <Container className="d-flex justify-content-center">
               <Card className="mb-3 bg-dark rounded-corners cardwidth">
                    <Row className="g-0">
                         <Col md={4}>
                              <a href={props.site.myUrl} target="_blank" rel="noreferrer">
                                   <img src={props.site.myImg} alt={props.site.myTitle} className="img-fluid rounded-corners img-thumbnail" />
                              </a>
                         </Col>
                         <Col md={8}>
                              <Card.Body>
                                   <Card.Title>{props.site.myTitle}</Card.Title>
                                   <Card.Text>{props.site.myText}</Card.Text>
                                   <Card.Text>
                                        <small>
                                             URL: <a href={props.site.myUrl}>{props.site.myUrl}</a><br />
                                             GIT: <a href={props.site.myGit}>{props.site.myGit}</a>
                                        </small>
                                   </Card.Text>
                              </Card.Body>
                         </Col>
                    </Row>
               </Card>
          </Container>
     );
}





