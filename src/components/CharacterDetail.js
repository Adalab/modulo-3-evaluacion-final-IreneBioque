 import { Link } from "react-router-dom"
 const ContactDetail = (props) => {
   return (
     <>
       <Link to="/">
         <p>Volver atrás</p>
       </Link>
       <h3>title=holi</h3>
       <img
         src={props.character.image}
         alt={props.characterName}
         title={props.characterName}
       />
       <ul>
        <li>Especie: {props.character.species}</li>
         <li>Planeta de origen: {props.character.planet}</li>
         <li>Estado: {props.character.status}</li>
         <li>Ciudad: {props.character.episodes}</li> 
       </ul>
     </>
   );
 }
 export default ContactDetail;
