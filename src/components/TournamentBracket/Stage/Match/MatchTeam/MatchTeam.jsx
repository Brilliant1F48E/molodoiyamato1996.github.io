import { useState, useEffect } from 'react';

import './MatchTeam.scss';


const MatchTeam = (props) => {
	const [team, setTeam] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (props.teamId) {
			const body = JSON.stringify({ tournamentTeamId: props.teamId });

			fetch("api/teams/getTournamentTeam", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: body
			})
				.then(response => response.json())
				.then(
					(result) => {
						setIsLoaded(true)
						setTeam(result.tournamentTeam)
					},
					(error) => {
						setIsLoaded(true)
						setError(error.error)
					});
		}
	}, [])

	if (team) {
		const img = `/images/${team.photo}`;

		return (
			<div className="match-team">
				<div className="match-team__photo">
					<img src={process.env.PUBLIC_URL + img} alt="" />
				</div>
				<div className="match-team__name">{team.name}</div>
			</div>
		)
	} else {
		return (
			<div className="match-team">
				<div className="math-team__none">?</div>
			</div>
		)
	}
}

export default MatchTeam;
