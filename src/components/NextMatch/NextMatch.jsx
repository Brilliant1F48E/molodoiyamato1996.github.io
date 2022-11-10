import { Link } from 'react-scroll';
import Team from '../Team/Team';

import team1 from '../../static/img/team1.jpeg';
import team2 from '../../static/img/team2.jpg';

import './NextMatch.scss';


const NextMatch = () => {
	return (
		<section className="next-match outer">
			<div className="section-title">Следующий матч</div>
			<div className="container">
				<div className="next-match__row">
					<Team img={team1} />
					<div className="next-match__info">
						<div className="next-match__info-date">15.20.2022 15:00</div>
						<div className="next-match__info-decoration">
							VS
						</div>
						<div className="next-match__info-format">Bo3</div>
					</div>
					<Team img={team2} />
				</div>
				<div className="button-wrapper">
					<Link className='button button_border' to='live' spy={false} smooth={true} duration={1000}>Смотреть игру</Link>
				</div>
			</div>
		</section>
	)
}

export default NextMatch;
