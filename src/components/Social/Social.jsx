import { HandySvg } from 'handy-svg';

import youtubeIcon from '../../static/icon/youtube.svg';
import telegramIcon from '../../static/icon/telegram.svg';
import githubIcon from '../../static/icon/github.svg';
import discordIcon from '../../static/icon/discord.svg';
import './Social.scss';


const Social = () => {
	return (
		<div className="social">
			<ul className="social__list">
				<li><a className="social__link" target="_blank" rel="noreferrer" href='https://www.youtube.com/channel/UC5dqGv87x0ciMW7vlrVp3_Q'>
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
				<li><a className="social__link" target="_blank" rel="noreferrer" href='https://discord.gg/7NHjPA4UhP'>
					<HandySvg
						className='social__icon'
						src={discordIcon}
					/>
				</a></li>
				<li><a className="social__link" target="_blank" rel="noreferrer" href='https://github.com/molodoiyamato1996/molodoiyamato1996.github.io'>
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
