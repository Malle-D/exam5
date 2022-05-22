import { NavLink } from "react-router-dom"
import "../Item/item.css"
function Items({text,src,id}){
  return(
    <li className="nav-items" id={id}>
      <NavLink key={id} to={`/chanel/${id}`}>
        <img src={src} alt="users img" />
        <p>{text}</p>
      </NavLink>
    </li>
  )
}
export default Items;