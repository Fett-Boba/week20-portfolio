import React from 'react';
import { } from './About.css';
import me from '../../img/tms150x214.jpg';

export default function About() {
     return (
          <div className="container">
               <br /><br />
               <div className="text-center">
                    <div className="noborder card mb-3 bg-d-flex justify-content-center bg-green cardwidth">
                         <div className="row g-0">
                              <div className="col-md-9">
                                   <div className="card-body">
                                        <h3>About Me</h3>
                                        <p className="card-text">I am an aspiring full stack developer with development
                                             experience in check image processing, data warehousing, general ledger, and
                                             posting applications.
                                        </p>
                                        <p className="card-text">I'm thrilled to transition from mainframe into the
                                             full stack web development world. I am currently enrolled in a bootcamp at the
                                             University of Washington focusing on HTML, CSS, JavaScript, Heroku, React and
                                             MySQL.
                                        </p>
                                   </div>
                              </div>
                              <div className="col-md-3">
                                   <img src={me} className="img-fluid rounded-corners" alt="" />
                              </div>
                         </div>
                    </div>
               </div>
               <br /><br />
          </div>
     );
}
