import './Live.scss';


const Live = () => {
	const streamSrc = 'https://www.youtube.com/embed/3m4vdskBOns'
	return (
		<section className="live outer">
			<div className="section-title">Прямая трансляция</div>
			<div className="container">
				<iframe className='live__stream' src={streamSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</section>
	);
}

export default Live;