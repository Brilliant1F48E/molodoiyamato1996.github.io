import './MatchTeam.scss';

const MatchTeam = (props) => {
	let matchTeamEls = []

	if (props.photo && props.name) {
		const img = `/images/${props.photo}`;

		matchTeamEls = [
			<div className="match-team__photo">
				<img src={process.env.PUBLIC_URL + img} alt="" />
			</div>,
			<div className="match-team__name">{props.name}</div>
		]
	} else {
		matchTeamEls = [
			<div className="math-team__none">?</div>
		]
	}
	return (
		<div className="match-team">
			{matchTeamEls}
		</div>
	)
}

export default MatchTeam;
