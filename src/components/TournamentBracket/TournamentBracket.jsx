import { useState, useEffect } from 'react';

import Stage from './Stage/Stage';

import './TournamentBracket.scss';


const TournamentBracket = () => {
	return (
		<section className="tournament-bracket outer">
			<div className="section-title">Турнирная сетка</div>
			<div className="container">
				<Stage stage='QUARTERFINAL' group='A' />
				<Stage stage='SEMIFINAL' group='A' />

				<Stage stage='FINAL' group={false} />

				<Stage stage='SEMIFINAL' group='B' />
				<Stage stage='QUARTERFINAL' group='B' />
			</div>
		</section>
	);
}

export default TournamentBracket;