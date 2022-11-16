import './Live.scss';


const Live = () => {
	const streamSrc = 'https://www.youtube.com/embed/3m4vdskBOns'
	return (
		<section className="live outer">
			<div className="section-title">Прямая трансляция</div>
			<div className="container">
				<div className="live__wrapper">
					<iframe className='live__stream' src={streamSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
			</div>
		</section>
	);
}

export default Live;