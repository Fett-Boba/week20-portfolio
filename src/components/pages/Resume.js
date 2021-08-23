import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import resume from '../../data/tsresume2.pdf'
import { } from './Resume.css';

export default function Resume() {
     return (
          <Container className="mycolors">

               <Row className="justify-content-md-center">
                    <Col md="auto"></Col>
                    <Col md="auto">
                         <br />
                         {/* <button className="btn btn-warning" type="button"><a href={resume}>Download Resume</a></button> */}
                         <a type="button" className="btn btn-warning btnstyle" href={resume}>Download Resume</a>
                         <br />
                         <br />
                    </Col>
                    <Col md="auto"></Col>
               </Row>

               <Row className="justify-content-md-center">
                    <Col md="auto" className="h-100">
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
                    <Col md="auto">
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
                    <Col md="auto">
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
                                                  <li>IBM DB2</li>
                                                  <li>SyncSort</li>
                                                  <li>SuperC</li>
                                                  <li>Endevor</li>
                                                  <li>ChangeMan</li>
                                                  <li>Z-Unix</li>
                                                  <li>z/OS</li>
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
