import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { } from './Resume.css';

export default function Resume() {
     return (
          <Container className="d-flex justify-content-center mycolors">
               <Row className="g-0 h-100">
                    <Col md={4}>
                         <div className="myspacing">
                              <Card className="mb-3 bg-dark rounded-corners mycardsize">
                                   <Card.Body>
                                        <Card.Title className="text-warning">Front End</Card.Title>
                                        <Card.Text>
                                             <ul>
                                                  <li>HTML</li>
                                                  <li>CSS</li>
                                                  <li>JavaScript</li>
                                                  <li>React</li>
                                                  <li>Bootstrap</li>
                                                  <li>Materialize</li>
                                                  <li>Handlebars</li>
                                             </ul>
                                        </Card.Text>
                                   </Card.Body>
                              </Card>
                         </div>
                    </Col>
                    <Col md={4}>
                         <div className="myspacing">
                              <Card className="mb-3 bg-dark rounded-corners mycardsize h-100">
                                   <Card.Body>
                                        <Card.Title className="text-warning">Back End</Card.Title>
                                        <Card.Text>
                                             <ul>
                                                  <li>MySQL</li>
                                                  <li>Mongo</li>
                                                  <li>indexDB</li>
                                                  <li>JSON</li>
                                                  <li>Sequelize</li>
                                                  <li>Mongoose</li>
                                                  <li>Node</li>
                                                  <li>Express</li>
                                                  <li>Apollo</li>
                                                  <li>GraphQL</li>
                                                  <li>Multer</li>
                                                  <li>Cloudinary</li>
                                             </ul>
                                        </Card.Text>
                                   </Card.Body>
                              </Card>
                         </div>
                    </Col>
                    <Col md={4}>
                         <div className="myspacing">
                              <Card className="mb-3 bg-dark rounded-corners mycardsize h-100">
                                   <Card.Body>
                                        <Card.Title className="text-warning">Other</Card.Title>
                                        <Card.Text>
                                             <ul>
                                                  <li>Assembler</li>
                                                  <li>Cobol</li>
                                                  <li>JCL</li>
                                                  <li>EzTreive</li>
                                                  <li>Rexx</li>
                                                  <li>Waapdsut</li>
                                                  <li>SyncSort</li>
                                                  <li>SuperC</li>
                                                  <li>Endevor</li>
                                                  <li>Changeman</li>
                                                  <li>NDM</li>
                                                  <li>z/OS Unix</li>
                                                  <li>TSO/ISPF</li>
                                             </ul>
                                        </Card.Text>
                                   </Card.Body>
                              </Card>
                         </div>
                    </Col>
               </Row>
          </Container>
     );
}
