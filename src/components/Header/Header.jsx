import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HandySvg } from 'handy-svg';
import logo from '../../static/icon/logo.svg';
import Social from '../Social/Social';

import './Header.scss';
import Navigation from '../Navigation/Navigation';


const Header = () => {
	const [menuState, setMenuState] = useState(false);

	const updateBodyStyle = () => {
		document.body.classList.toggle('_lock');
	}

	const menuToggle = (state) => {
		updateBodyStyle();
		setMenuState(!state);
	}

	const headerRef = useRef(null);

	const headerToggleFixed = () => {
		let scroll = window.scrollY;

		if (scroll > 0) {
			headerRef.current.classList.add('_fixed');
		} else {
			headerRef.current.classList.remove('_fixed');
		}

	}

	useEffect(() => {
		window.addEventListener('scroll', headerToggleFixed);
		return () => window.removeEventListener("scroll", headerToggleFixed)
	})

	return (
		<header ref={headerRef} className="header outer">
			<div className="container">
				<Link className='logo' to='hero' spy={true} smooth={true} duration={1000}>
					<HandySvg
						src={logo}
						width='40'
						height='48'
					/>
					Burning Cup
				</Link>
				<div className="menu">
					<div className={menuState ? 'menu__icon _active' : 'menu__icon'} onClick={() => menuToggle(menuState)}>
						<span></span>
					</div>
					<div className={menuState ? 'menu__body _active' : 'menu__body'}>
						<Navigation />
						<Social />
					</div>
				</div>
			</div>
		</header >
	);
}

export default Header;