import { HandySvg } from 'handy-svg';
import { Link } from 'react-scroll';

import Social from './Social/Social';
import Navigation from './Navigation/Navigation';
import logo from '../../static/icon/logo.svg';
import file from '../../static/Регламент.pdf';

import './Footer.scss';

const Footer = () => {
	const downloadFile = file => {
		const link = document.createElement('a');
		link.href = file;
		link.download = file.split('/')[3].split('.')[0] + '.pdf';
		link.click();
	};

	return (
		<footer className="footer outer">
			<div className="container">
				<div className="footer__column">
					<Link className="footer-logo" to='hero' spy={false} smooth={true} duration={1000}>
						<HandySvg src={logo} className='footer-logo__icon' />
						<div className="footer-logo__text">
							<span>Burning Cup</span>
							При поддержке СПК
						</div>
					</Link>
					<button className="footer__download-rule" onClick={() => downloadFile(file)}>Скачать регламент турнира</button>
				</div>
				<Navigation />
				<Social />
			</div>
		</footer>
	);
}

export default Footer;