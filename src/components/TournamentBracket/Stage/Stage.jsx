import { useState, useEffect } from 'react';

import Match from "./Match/Match"

import './Stage.scss';


const Stage = (props) => {
	const [matches, setMatches] = useState([]);

	useEffect(() => {
		const data = {
			stage: props.stage,
			group: props.group ? props.group : false
		}

		console.log(data);

		fetch("/api/matches/getMatches", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => setMatches(data.items))
	}, [])

	const matchesTags = matches.map(match => <Match key={match.id} firstTournamentTeamId={match.first_tournament_team_id} secondTournamentTeamId={match.second_tournament_team_id} />)

	return (
		<div className="stage">
			{matchesTags}
		</div>
	)
}

export default Stage;
