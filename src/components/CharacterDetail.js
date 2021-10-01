
import { Link } from "react-router-dom"

const ContactDetail = (props) => {

   return (
     <>
       <Link to="/">
         <p>Volver atrás</p>
       </Link>
       <img
         src={props.character.image}
         alt={props.characterName}
         title={props.characterName}
       />
       <ul>
         <li>Species: {props.character.species}</li>
         <li>Origin: {props.character.planet}</li>
         <li>Status: {props.character.status}</li>
         <li>Episodes: {props.character.episodes}</li>
       </ul>
     </>
   );
 }
 export default ContactDetail;
