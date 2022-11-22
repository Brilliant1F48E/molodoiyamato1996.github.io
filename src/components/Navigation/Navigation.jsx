import { Link } from 'react-scroll';

import './Navigation.scss';


const Navigation = () => {
	return (
		<nav className="navigation">
			<ul className="navigation__list">
				<li><Link className="navigation__link" to="hero" smooth={true} duration={1000}>Главная</Link></li>
				<li><Link className="navigation__link" to="tournament-bracket" smooth={true} duration={1000}>Турнирная сетка</Link></li>
				<li><Link className="navigation__link" to="live" smooth={true} duration={1000}>Прямая трасляция</Link></li>
				<li><Link className="navigation__link" to="faq" smooth={true} duration={1000}>FAQ</Link></li>
			</ul>
		</nav>
	)
}

export default Navigation;
