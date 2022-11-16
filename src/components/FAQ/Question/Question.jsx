import { useState } from 'react';
import { Link } from 'react-scroll';
import { HandySvg } from 'handy-svg';

import arrowDown from '../../../static/icon/arrow-down.svg';

import './Question.scss';


const Question = (props) => {
	const [questionState, setQuestionState] = useState(false);

	return (
		<div className={questionState ? 'question _active' : 'question'} onClick={() => setQuestionState(!questionState)}>
			<div className="question__trigger">
				<span>{props.title}</span>
				<HandySvg src={arrowDown} className={questionState ? 'arrow-down _rotate' : 'arrow-down'} />
			</div>
			<div className="question__body">
				{props.text}
			</div>
		</div>
	)
}

export default Question;
