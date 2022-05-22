import { NavLink } from 'react-router-dom';
import './item.css';
function Item({ text, Icon, PathName }) {
	return (
		<li className='nav-item'>
			<NavLink className="nav-item_link" to={PathName}>
				<Icon />
				<p>{text}</p>
			</NavLink>
		</li>
	);
}
export default Item;
