import Team from '../Team/Team';
import team1 from '../../static/img/team1.jpeg';
import team2 from '../../static/img/team2.jpg';

import './Teams.scss';


const Teams = () => {
	return (
		<section className="teams outer">
			<div className="section-title">Команды</div>
			<div className="container">
				<Team img={team1} />
				<Team img={team2} />
				<Team img={team1} />
				<Team img={team2} />
				<Team img={team1} />
				<Team img={team2} />
				<Team img={team1} />
				<Team img={team2} />
			</div>
		</section>
	);
}

export default Teams;