import './MatchTeam.scss';

const MatchTeam = (props) => {
	return (
		<div className="match-team">
			<div className="match-team__photo">{props.photo}</div>
			<div className="match-team__name">{props.name}</div>
			<div className="match-team__points">{props.points}</div>
		</div>
	)
}

export default MatchTeam;
