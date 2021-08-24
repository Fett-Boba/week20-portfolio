import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { } from "../assets/css/Footer.css";

export default function Footer() {
     const myGit = "https://github.com/Fett-Boba";
     const myLinkedin = "https://www.linkedin.com/in/t-s-683927208/";
     const mySpotify = "https://open.spotify.com/playlist/3Pv56tAsmcFaT4ZI2P26Ld"
     return (
          <footer className="icon-size d-flex justify-content-center bg-red">
               <a className="icon-spacing bg-red text-warning"
                    target="_blank"
                    rel="noreferrer"
                    href={myGit}>
                    <FontAwesomeIcon icon={faGithubSquare} />
               </a>
               <a className="icon-spacing bg-red text-warning"
                    target="_blank"
                    rel="noreferrer"
                    href={myLinkedin}>
                    <FontAwesomeIcon icon={faLinkedin} />
               </a>
               <a className="icon-spacing bg-red text-warning"
                    target="_blank"
                    rel="noreferrer"
                    href={mySpotify}>
                    <FontAwesomeIcon icon={faSpotify} />
               </a>
          </footer>
     );
}
