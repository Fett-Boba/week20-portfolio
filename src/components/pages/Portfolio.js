import React from 'react';
import myImg from "../../img/artgalleryThumbnail.PNG"
import { } from "./Portfolio.css";


export default function Portfolio() {

     const myUrl = "https://happylittleartgallery072021.herokuapp.com/";
     const myTitle = "The Happy Little Art Gallery";
     const myText = "The Happy Little Art Gallery is a Bob Ross inspired group project which allows budding artists to showcase their art, give and receive critiques, and purchase artwork via a secure paypal hook. The site uses Sequelize, express-session, Handlebars, MySql, BCrypt, Multer, Cloudinary, and the PayPal restful SDK. It is deployed to Heroku.";

     return (
          <div className="container d-flex justify-content-center">
               <div className="card mb-3 bg-dark rounded-corners cardwidth">
                    <div className="row g-0">
                         <div className="col-md-4">
                              <a href={myUrl} target="_blank" rel="noreferrer">
                                   <img src={myImg} className="img-fluid rounded-corners img-thumbnail" alt=""></img>
                              </a>
                         </div>

                         <div className="col-md-8">
                              <div className="card-body">
                                   <h5 className="card-title">{myTitle}</h5>
                                   <p className="card-text">{myText}</p>
                                   <p className="card-text>">
                                        <small className="text-muted">
                                             <a href={myUrl}>{myUrl}</a>
                                        </small>
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}