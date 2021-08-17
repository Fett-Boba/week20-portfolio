import boba from "../img/bobaThumbnail75x75.png";
import me from "../img/meDarkYellow.png";

export default function Header() {
     return (
          // <header>
          //      <h1>Tami Shepard</h1>
          // </header>

          <header className="row bg-red">
               <div className="col-md-9 align-self-center">
                    <img src={boba} />
                    <img src={me} />
               </div>
          </header>

     );
}