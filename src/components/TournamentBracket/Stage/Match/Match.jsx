import { useState, useEffect } from 'react';

import MatchTeam from './MatchTeam/MatchTeam';

import './Match.scss';

const Match = (props) => {
	const [matchFirstTournamentTeam, setMatchFirstTournamentTeam] = useState(false)
	const [matchSecondTournamentTeam, setMatchSecondTournamentTeam] = useState(false)

	useEffect(() => {
		if (props.firstTournamentTeamId) {
			console.log(`Ключ первой команды: ${props.firstTournamentTeamId}`);
			fetch("api/match/getMatchTournamentTeams", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify({
					tournament_team_id: props.firstTournamentTeamId,
				})
			})
				.then(response => response.json())
				.then(data => setMatchFirstTournamentTeam(data.items))
		}

		if (props.secondTournamentTeamId) {
			console.log(`Ключ второй команды: ${props.secondTournamentTeamId}`);
			fetch("api/match/getMatchTournamentTeams", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify({
					tournament_team_id: props.secondTournamentTeamId,
				})
			})
				.then(response => response.json())
				.then(data => setMatchSecondTournamentTeam(data.items))
		}
	}, [])

	const matchTournamentTeamEls = []

	if (matchFirstTournamentTeam) {
		matchTournamentTeamEls.push(
			<MatchTeam key={matchFirstTournamentTeam.id} photo={matchFirstTournamentTeam.photo} name={matchFirstTournamentTeam.name} />
		)
	} else {
		matchTournamentTeamEls.push(
			<MatchTeam photo={false} name={false} />
		)
	}

	if (matchSecondTournamentTeam) {
		matchTournamentTeamEls.push(
			<MatchTeam key={matchSecondTournamentTeam.id} photo={matchSecondTournamentTeam.photo} name={matchSecondTournamentTeam.name} />
		)
	} else {
		matchTournamentTeamEls.push(
			<MatchTeam photo={false} name={false} />
		)
	}

	console.log(matchTournamentTeamEls);
	return (
		<div className="item">
			<div className="match">
				{matchTournamentTeamEls}
			</div>
		</div>
	)
}

export default Match;
