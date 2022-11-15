import './Team.scss';


const Team = (props) => {
	const img = `/images/${props.photo}`;

	return (
		<div className="team">
			<div style={{ height: props.height }} className="team__img">
				<img src={process.env.PUBLIC_URL + img} alt={props.name} />
			</div>
		</div>
	);
}

export default Team;
