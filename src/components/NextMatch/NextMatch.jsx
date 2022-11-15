import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Team from '../Team/Team';

import './NextMatch.scss';


const NextMatch = () => {
	const [nextGame, setNextGame] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('api/games/getNextGame', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		})
			.then(response => response.json())
			.then(
				(result) => {
					setNextGame(result.items.next_game);
					setIsLoaded(true);
				},
				(error) => {
					setError(error.error);
					setIsLoaded(true);
				}
			)
	}, [])

	if (error) {
		return (
			<section className="next-game outer">
				<div className="section-title">Следующий матч</div>
				<div className="container">
					Следующая игра ещё не назначенна
				</div>
			</section>
		)
	} else {
		return (
			<section className="next-game outer">
				<div className="section-title">Следующий матч</div>
				<div className="container">
					<div className="next-game__row">
						{/* <Team photo={nextGame.first_tournament_team.photo} /> */}
						<div className="next-game__info">
							{/* <div className="next-game__info-date">{nextGame.start_date}</div> */}
							<div className="next-game__info-decoration">
								VS
							</div>
							{/* <div className="next-game__info-format">{nextGame.format}</div> */}
						</div>
						{/* <Team photo={nextGame.second_tournament_team.photo} /> */}
					</div>
					<div className="button-wrapper">
						<Link className='button button_border' to='live' spy={false} smooth={true} duration={1000}>Смотреть игру</Link>
					</div>
				</div>
			</section>
		)
	}

}

export default NextMatch;
