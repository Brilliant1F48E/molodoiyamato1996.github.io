import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Team from '../Team/Team';

import './NextMatch.scss';


const NextMatch = () => {
	const [nextGame, setNextGame] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('/api/games/getNextGame')
			.then(response => response.json())
			.then((body) => {
				setIsLoaded(true);

				if (body['error']) {
					setError(body.error);
				} else {
					setNextGame(body.items);
				}
			})
			.catch((error) => {
				setError(error.error);
			})
	}, [])

	if (nextGame) {
		console.log(typeof (nextGame.start_date));
		return (
			<section className="next-game outer">
				<div className="section-title">Следующая игра</div>
				<div className="container">
					<div className="next-game__row">
						<Team photo={nextGame.first_tournament_team.photo} height={200} />
						<div className="next-game__info">
							<div className="next-game__info-date">{nextGame.start_date}</div>
							<div className="next-game__info-decoration">
								VS
							</div>
							<div className="next-game__info-format">{nextGame.format}</div>
						</div>
						<Team photo={nextGame.second_tournament_team.photo} height={200} />
					</div>
					<div className="button-wrapper">
						<Link className='button button_border' to='live' spy={false} smooth={true} duration={1000}>Смотреть игру</Link>
					</div>
				</div>
			</section>
		)
	} else {
		return (
			<section className="next-game outer">
				<div className="section-title">Следующая игра</div>
				<div className="container">
					<div className='next-game__notify'>Следующая игра ещё не назначена</div>
				</div>
			</section>
		)
	}

}

export default NextMatch;
