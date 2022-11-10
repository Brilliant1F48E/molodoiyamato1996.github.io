import './Team.scss';


const Team = (props) => {
	let teamName = (
		<div className="team__name">
			{props.name}
		</div>
	)
	return (
		<div className="team">
			<div className="team__img">
				<img src={props.img} alt={props.name} />
			</div>
		</div>
	);
}

export default Team;
