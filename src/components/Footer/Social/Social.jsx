import { HandySvg } from 'handy-svg';

import youtubeIcon from '../../../static/icon/youtube.svg';
import telegramIcon from '../../../static/icon/telegram.svg';
import githubIcon from '../../../static/icon/github.svg';
import discordIcon from '../../../static/icon/discord.svg';
import './Social.scss';


const Social = () => {
	return (
		<div className="social">
			<div className="social__title">Контакты</div>
			<ul className="social__list">
				<li><a className="social__link" target="_blank" rel="noreferrer" href='https://t.me/burning_cup'>
					<HandySvg
						className='social__icon'
						src={youtubeIcon}
					/>
				</a></li>
				<li><a className="social__link" target="_blank" rel="noreferrer" href='https://t.me/burning_cup'>
					<HandySvg
						className='social__icon'
						src={telegramIcon}
					/>
				</a></li>
				<li><a className="social__link" target="_blank" rel="noreferrer" href='https://t.me/burning_cup'>
					<HandySvg
						className='social__icon'
						src={discordIcon}
					/>
				</a></li>
				<li><a className="social__link" target="_blank" rel="noreferrer" href='https://t.me/burning_cup'>
					<HandySvg
						className='social__icon'
						src={githubIcon}
					/>
				</a></li>
			</ul>

		</div>
	)
}

export default Social;
