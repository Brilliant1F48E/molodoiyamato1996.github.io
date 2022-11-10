import { Link } from 'react-scroll';
import { HandySvg } from 'handy-svg';
import heroText from '../../static/icon/hero-text.svg';
import arrowDown from '../../static/icon/arrow-down.svg';

import './Hero.scss';


const Hero = () => {
	return (
		<section className="hero outer">
			<div className="container">
				<div className="offer">
					<h1>
						<HandySvg
							className='hero__text'
							src={heroText}
						/>
					</h1>
					<p>
						Платформа для проведения киберспортивных сезонных онлайн турниров. Среди учащихся колледжей и школ.
					</p>
				</div>
				<Link className='scroll-down' to='next-match' spy={true} smooth={true} duration={1000}>
					<HandySvg src={arrowDown} />
				</Link>
			</div>
		</section >
	);
}

export default Hero;