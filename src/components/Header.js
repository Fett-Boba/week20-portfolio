import boba from "../img/bobaThumbnail75x75.png";
import me from "../img/meDarkYellow.png";
import { } from "./Header.css";

export default function Header({ currentPage, handlePageChange }) {
     return (
          <header className="row">
               <nav className="navbar">
                    <div className="container-fluid bg-red">
                         <ul className="navbar-brand">
                              <img src={boba} className="d-inline-block align-text-top" alt="" />
                              <img src={me} className="d-inline-block align-text-top" alt="" />
                         </ul>
                         <ul className="nav justify-content-end">
                              <li className="nav-item">
                                   <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
                              </li>
                              <li className="nav-item">
                                   <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                              </li>
                              <li className="nav-item">
                                   <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                              </li>
                              <li className="nav-item">
                                   <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
                              </li>
                         </ul>
                    </div>
               </nav>
          </header>
     );
}