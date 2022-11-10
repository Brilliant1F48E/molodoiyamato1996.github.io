import { useState } from 'react';
import { Link } from 'react-scroll';

import './Question.scss';


const Question = (props) => {
	const [questionState, setQuestionState] = useState(false);

	return (
		<div className={questionState ? 'question _active' : 'question'} onClick={() => setQuestionState(!questionState)}>
			<div className="question__trigger">{props.title}</div>
			<div className="question__body">
				{props.text}
			</div>
		</div>
	)
}

export default Question;
