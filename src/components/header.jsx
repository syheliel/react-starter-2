import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEarthAmerica} from '@fortawesome/free-solid-svg-icons';
let Header = () => {
	return (
	<header>
		<FontAwesomeIcon icon={faEarthAmerica} className="header__icon"></FontAwesomeIcon>
		<span>my travel journal.</span>
	</header>
	)
}

export default Header;