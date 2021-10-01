
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
         <li>Especie: {props.character.species}</li>
         <li>Planeta de origen: {props.character.planet}</li>
         <li>Estado: {props.character.status}</li>
         <li>Episodios en los que sale: {props.character.episodes}</li>
       </ul>
     </>
   );
 }
 export default ContactDetail;
