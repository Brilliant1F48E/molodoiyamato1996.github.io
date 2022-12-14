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
					<MatchTeam team={match.firstTournamentTeam} />
					<MatchTeam team={match.secondTournamentTeam} />
				</div>
			</div>
		)
	} else {
		return (
			<div className="item">
				<div className="match">
					<MatchTeam team={null} />
					<MatchTeam team={null} />
				</div>
			</div>
		)
	}


}

export default Match;
