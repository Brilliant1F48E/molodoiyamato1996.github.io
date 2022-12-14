import { useState, useEffect } from 'react';

import './MatchTeam.scss';


const MatchTeam = (props) => {
	const team = props.team;

	if (team) {
		const img = `/images/${team.photo}`;

		return (
			<div className="match-team">
				<div className="match-team__photo">
					<img src={process.env.PUBLIC_URL + img} alt={`Логотип команды ${team.name}`} />
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
