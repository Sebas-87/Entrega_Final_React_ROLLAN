import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom' 

const NavBar = () => {
	return (
		<nav className="NavBar" >
			<NavLink end to={`/`} className={({ isActive}) => isActive ? 'ActiveOption' : ''}>
				<strong>The Coffee Shop</strong>
			</NavLink>
			<div className="Enlaces">
				<NavLink end to={`/category/cafe`} className={({ isActive}) => isActive ? 'ActiveOption' : ''}>Coffee</NavLink>
				<NavLink end to={`/category/capuccino`} className={({ isActive}) => isActive ? 'ActiveOption': ''}>Cappuccino</NavLink>
				<NavLink end to={`/category/licuado`} className={({ isActive}) => isActive ? 'ActiveOption': ''}>Milkshake</NavLink>
			</div>
			<CartWidget />
		</nav>
	)
}

export default NavBar
