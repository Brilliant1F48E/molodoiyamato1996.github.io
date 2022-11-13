import { useEffect, useState } from 'react';
import Team from '../Team/Team';

import './Teams.scss';


const Teams = () => {
	const [currentTeams, setCurrentTeams] = useState([]);

	useEffect(() => {
		fetch('/api/teams/getTournamentTeams')
			.then(response => response.json())
			.then(data => setCurrentTeams(data.items))
	}, [])

	let teams = <h2 className='teams__notify'>На данный момент ни одна команда не зарегистрирована</h2>;

	if (currentTeams.length > 0) {
		teams = currentTeams.map(team => <Team key={team.id} img={team.img} />);
	}

	return (
		<section className="teams outer">
			<div className="section-title">Команды</div>
			<div className="container">
				{teams}
			</div>
		</section>
	);
}

export default Teams;