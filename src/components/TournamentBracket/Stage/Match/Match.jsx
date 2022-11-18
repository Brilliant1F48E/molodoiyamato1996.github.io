import { useState, useEffect } from 'react';

import MatchTeam from './MatchTeam/MatchTeam';

import './Match.scss';

const Match = (props) => {
	const [match, setMatch] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const body = JSON.stringify({ numberMatch: props.number });

		fetch("api/matches/getMatch", {
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
					setMatch(result.match)
				},
				(error) => {
					setIsLoaded(true)
					setError(error.error)
				});
	}, [])

	if (match) {
		return (
			<div className="item">
				<div className="match">
					<MatchTeam teamId={match.firstTournamentTeamId} />
					<MatchTeam teamId={match.secondTournamentTeamId} />
				</div>
			</div>
		)
	} else {
		return (
			<div className="item">
				<div className="match">
					<MatchTeam teamId={false} />
					<MatchTeam teamId={false} />
				</div>
			</div>
		)
	}


}

export default Match;
