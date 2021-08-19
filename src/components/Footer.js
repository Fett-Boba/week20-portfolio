import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { } from "./Footer.css";

export default function Footer() {
     const myGit = "https://github.com/Fett-Boba";
     const myLinkedin = "https://www.linkedin.com/in/t-s-683927208/";
     return (
          <footer className="bg-red icon-size fixed-bottom d-flex justify-content-center">
               <a className="icon-spacing" href={myGit}><FontAwesomeIcon icon={faGithubSquare} /></a>
               <a className="icon-spacing" href={myLinkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
          </footer>
     );
}


