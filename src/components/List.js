export default function List({ skills }) {
     return (
          <div className="container">
               <h1>Skills:</h1>
               <ul className="list-group">
                    {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
                    {skills.map((skill) => (
                         <li className="list-group-item" key={skill.id}>
                              {`${skill.name} ${skill.stack}`}
                         </li>
                    ))}
               </ul>
          </div>
     );
}