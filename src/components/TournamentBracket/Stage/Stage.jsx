import { useState, useEffect } from 'react';

import Match from "./Match/Match"

import './Stage.scss';


const Stage = (props) => {
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
	let matches = []
	if (props.stage === 'FINAL') {
		for (let i = 13; i < 14; i++) {
			matches.push(<Match number={i} />);
		}
	} else if (props.stage === 'SEMIFINAL') {
		if (props.group === 'B') {
			for (let i = 11; i < 13; i++) {
				matches.push(<Match number={i} />);
			}
		} else if (props.group === 'A') {
			for (let i = 9; i < 11; i++) {
				matches.push(<Match number={i} />);
			}
		}
	} else if (props.stage === 'QUARTERFINAL') {
		if (props.group === 'B') {
			for (let i = countMatches + 1; i < (countMatches * 2 + 1); i++) {
				matches.push(<Match number={i} />);
			}
		} else if (props.group === 'A') {
			for (let i = 1; i < (countMatches + 1); i++) {
				matches.push(<Match number={i} />);
			}
		}
	}

	return (
		<div className={`stage ${props.stage.toLowerCase()} ${props.group}`}>
			<div className="stage__title">{stageTitleText}</div>
			<div className={`stage__matches ${props.stage.toLowerCase()} ${props.group}`}>
				{matches}
			</div>
		</div>
	)
}


export default Stage;
