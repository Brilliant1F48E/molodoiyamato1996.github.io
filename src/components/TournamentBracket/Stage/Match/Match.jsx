import { useState, useEffect } from 'react';

import MatchTeam from './MatchTeam/MatchTeam';

import './Match.scss';

const Match = (props) => {
	const [matchTournamentTeams, setMatchTournamentTeams] = useState([]);

	const firstTournamentTeamId = props.firstTournamentTeamId;
	const secondTournamentTeamId = props.secondTournamentTeamId;

	useEffect(() => {
		fetch("api/matches/getMatchTournamentTeams", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({
				first_tournament_team_id: firstTournamentTeamId,
				second_tournament_team_id: secondTournamentTeamId
			})
		})
			.then(response => response.json())
			.then(data => setMatchTournamentTeams(data.items))
	}, [])

	if (matchTournamentTeams.length > 0) {
		console.log(matchTournamentTeams);
		console.log(matchTournamentTeams[0].first_tournament_team_id)
		console.log(matchTournamentTeams[0].second_tournament_team)
	}

	return (
		<div className="match">
			<MatchTeam />
			<MatchTeam />
		</div>
	)
}

export default Match;
