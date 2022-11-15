import { useState, useEffect } from 'react';

import Match from "./Match/Match"

import './Stage.scss';


const Stage = (props) => {
	const [matches, setMatches] = useState([]);
	const [, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const data = {
			stage: props.stage,
			group: props.group
		}

		fetch("/api/matches/getMatches", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(
				(result) => {
					setMatches(result.items);
					setIsLoaded(true);
				},
				(error) => {
					setError(error.error);
					setIsLoaded(true);
				});
	}, [])

	let stageTitleText = '';
	let countMatches = 0;

	if (props.stage === 'QUARTERFINAL') {
		stageTitleText = '1/4 Финала';
		countMatches = 4;
	} else if (props.stage === 'SEMIFINAL') {
		stageTitleText = '1/2 Финала'
		countMatches = 2;
	} else if (props.stage === 'FINAL') {
		stageTitleText = 'Финал'
		countMatches = 1;
	}

	const matchesActive = matches.map(match => {
		const firstTournamentTeamId = match.first_tournament_team_id ? match.first_tournament_team_id : false
		const secondTournamentTeamId = match.second_tournament_team_id ? match.second_tournament_team_id : false

		return <Match key={match.id} firstTournamentTeamId={firstTournamentTeamId} secondTournamentTeamId={secondTournamentTeamId} />
	});

	if (matchesActive.length !== countMatches) {
		const left = countMatches - matchesActive.length

		for (let i = 0; i < left; i++) {
			matchesActive.push(<Match firstTournamentTeamId={false} secondTournamentTeamId={false} />)
		}
	}

	return (
		<div className={`stage ${props.stage.toLowerCase()} ${props.group}`}>
			<div className="stage__title">{stageTitleText}</div>
			<div className={`stage__matches ${props.stage.toLowerCase()} ${props.group}`}>
				{matchesActive}
			</div>
		</div>
	)
}

export default Stage;
