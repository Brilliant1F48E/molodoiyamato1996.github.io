import './Team.scss';


const Team = (props) => {
	const img = `/images/${props.img}`;

	return (
		<div className="team">
			<div className="team__img">
				<img src={process.env.PUBLIC_URL + img} alt={props.name} />
			</div>
		</div>
	);
}

export default Team;
