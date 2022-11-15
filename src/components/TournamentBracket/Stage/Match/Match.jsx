import { useState, useEffect } from 'react';

import MatchTeam from './MatchTeam/MatchTeam';

import './Match.scss';

const Match = (props) => {
	const [firstTournamentTeam, setFirstTournamentTeam] = useState(null);
	const [errorFirstTournamentTeam, setErrorFirstTournamentTeam] = useState(null);
	const [firstTournamentTeamIsLoaded, setFirstTournamentTeamIsLoaded] = useState(false);

	const [secondTournamentTeam, setSecondTournamentTeam] = useState(null);
	const [errorSecondTournamentTeam, setErrorSecondTournamentTeam] = useState(null);
	const [secondTournamentTeamIsLoaded, setSecondTournamentTeamIsLoaded] = useState(false);

	useEffect(() => {
		if (props.firstTournamentTeamId) {
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
				.then(
					(result) => {
						setFirstTournamentTeam(result.items)
						setFirstTournamentTeamIsLoaded(true)
					},
					(error) => {
						setErrorFirstTournamentTeam(error.error)
						setFirstTournamentTeamIsLoaded(true)
					});
		}

		if (props.secondTournamentTeamId) {
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
				.then(
					(result) => {
						setSecondTournamentTeam(result.items)
						setSecondTournamentTeamIsLoaded(true)
					},
					(error) => {
						setErrorSecondTournamentTeam(error.error)
						setSecondTournamentTeamIsLoaded(true)
					});
		}
	}, [])

	const matchTournamentTeamEls = []

	if (firstTournamentTeam) {
		matchTournamentTeamEls.push(
			<MatchTeam key={firstTournamentTeam.id} photo={firstTournamentTeam.photo} name={firstTournamentTeam.name} />
		)
	} else {
		matchTournamentTeamEls.push(
			<MatchTeam photo={false} name={false} />
		)
	}

	if (secondTournamentTeam) {
		matchTournamentTeamEls.push(
			<MatchTeam key={secondTournamentTeam.id} photo={secondTournamentTeam.photo} name={secondTournamentTeam.name} />
		)
	} else {
		matchTournamentTeamEls.push(
			<MatchTeam photo={false} name={false} />
		)
	}

	return (
		<div className="item">
			<div className="match">
				{matchTournamentTeamEls}
			</div>
		</div>
	)
}

export default Match;
