import { HandySvg } from 'handy-svg';
import { Link } from 'react-scroll';

import './Social.scss';


const Social = () => {
	return (
		<div className="social">
			<div className="social__title">Контакты</div>
			<ul className="social__list">
				<li><Link className="social__link" href='https://t.me/burning_cup'>Youtube</Link></li>
				<li><Link className="social__link" href='https://t.me/burning_cup'>Telegram</Link></li>
				<li><Link className="social__link" href='https://t.me/burning_cup'>Github</Link></li>
				<li><Link className="social__link" href='https://t.me/burning_cup'>Discord</Link></li>
			</ul>

		</div>
	)
}

export default Social;
