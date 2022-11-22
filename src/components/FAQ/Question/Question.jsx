import { useState } from 'react';
import { Link } from 'react-scroll';
import { HandySvg } from 'handy-svg';

import arrowDown from '../../../static/icon/arrow-down.svg';

import './Question.scss';


const Question = (props) => {
	const [questionState, setQuestionState] = useState(false);

	const download = props.download;
	const links = props.links;
	const text = props.text.split('<>');

	let questionBody = [];

	if (links.length > 0) {
		const linkEls = links.map(l => <a className='question__link' href={l.href} target="_blank" rel="noreferrer">{l.href}</a>)

		for (let i = 0; i < links.length; i++) {
			questionBody.push(<span>{text[i]}{linkEls[i]}</span>);
		}
		questionBody.push(<span>{text[links.length]}</span>);
	} else if (download) {
		questionBody.push(<span>{text[0]}{download}{text[1]}</span>);
	}



	const questionBodyEl = <div className="question__body" onClick={e => e.stopPropagation()}>{questionBody}</div>;

	return (
		<div className={questionState ? 'question _active' : 'question'} onClick={() => setQuestionState(!questionState)}>
			<div className="question__trigger">
				<span>{props.title}</span>
				<HandySvg src={arrowDown} className={questionState ? 'arrow-down _rotate' : 'arrow-down'} />
			</div>
			{questionBodyEl}
		</div>
	)
}

export default Question;
