import { useEffect, useState } from 'react';
import Team from '../Team/Team';

import './Teams.scss';


const Teams = () => {
	const [teams, setTeams] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('/api/teams/getTournamentTeams')
			.then(response => response.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setTeams(result.items);
				},
				(error) => {
					setIsLoaded(true);
					setError(error.error);
				});
	}, [])

	const teamsData = teams.map(team => <Team key={team.id} photo={team.photo} name={team.name} height={234} />);

	if (teams.length > 0) {
		return (
			<section className="teams outer">
				<div className="section-title">Команды</div>
				<div className="container">
					{teamsData}
				</div>
			</section>
		);
	} else {
		return (
			<section className="teams outer">
				<div className="section-title">Команды</div>
				<div className="container">
					<h2 className='teams__notify'>На данный момент ни одна команда не зарегистрирована</h2>
				</div>
			</section>
		)

	}

}

export default Teams;