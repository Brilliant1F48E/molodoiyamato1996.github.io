import { useState, useEffect } from 'react';
import './Live.scss';


const Live = () => {
	const [day, setDay] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("api/days/getDay", {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		})
			.then(response => response.json())
			.then(
				(result) => {
					setIsLoaded(true)
					setDay(result.day)
				},
				(error) => {
					setIsLoaded(true)
					setError(error.error)
				});
	}, [])

	if (day) {
		const streamLink = day.streamLink;

		return (
			<section className="live outer">
				<div className="section-title">Прямая трансляция</div>
				<div className="container">
					<div className="live__wrapper">
						<iframe className='live__stream' src={streamLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				</div>
			</section>
		);
	} else {
		return (
			<section className="live outer">
				<div className="section-title">Прямая трансляция</div>
				<div className="container">
					<div className="live__wrapper">
						<div className="live__notify">Трансляция в данный момент недоступа</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Live;