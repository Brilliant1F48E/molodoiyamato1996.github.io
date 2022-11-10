import { useRef, useState } from 'react';
import Question from './Question/Question.jsx';

import './FAQ.scss';


const FAQ = () => {
	const questionsData = [
		{ id: 1, title: 'Что делать если не работает бот?', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto natus nam distinctio nesciunt fugiat, debitis culpa voluptatibus expedita voluptate cupiditate autem, error, totam voluptas. Dolor consequatur similique distinctio numquam! Quae. Dolorum eligendi laudantium facere. Fugiat, necessitatibus ex. Itaque assumenda corporis officia! Voluptatem voluptas odio, assumenda qui rerum distinctio vel sint nobis repellat, nulla harum veritatis nesciunt mollitia temporibus, enim aliquam. Vero corrupti saepe culpa atque repudiandae porro illum vitae omnis architecto, non, at molestias numquam repellendus magnam molestiae? Id inventore ipsam asperiores autem soluta architecto blanditiis fuga tempora consectetur at! Necessitatibus voluptatem temporibus vero natus aliquam id in, cupiditate, labore, iusto iste eveniet provident. Natus architecto esse cum eveniet earum ratione consectetur ut, voluptate minima, expedita ipsum reiciendis, sed exercitationem.' },
		{ id: 2, title: 'Что делать если дали бан?', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto natus nam distinctio nesciunt fugiat, debitis culpa voluptatibus expedita voluptate cupiditate autem, error, totam voluptas. Dolor consequatur similique distinctio numquam! Quae. Dolorum eligendi laudantium facere. Fugiat, necessitatibus ex. Itaque assumenda corporis officia! Voluptatem voluptas odio, assumenda qui rerum distinctio vel sint nobis repellat, nulla harum veritatis nesciunt mollitia temporibus, enim aliquam. Vero corrupti saepe culpa atque repudiandae porro illum vitae omnis architecto, non, at molestias numquam repellendus magnam molestiae? Id inventore ipsam asperiores autem soluta architecto blanditiis fuga tempora consectetur at! Necessitatibus voluptatem temporibus vero natus aliquam id in, cupiditate, labore, iusto iste eveniet provident. Natus architecto esse cum eveniet earum ratione consectetur ut, voluptate minima, expedita ipsum reiciendis, sed exercitationem.' },
		{ id: 3, title: 'Как принять участие?', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto natus nam distinctio nesciunt fugiat, debitis culpa voluptatibus expedita voluptate cupiditate autem, error, totam voluptas. Dolor consequatur similique distinctio numquam! Quae. Dolorum eligendi laudantium facere. Fugiat, necessitatibus ex. Itaque assumenda corporis officia! Voluptatem voluptas odio, assumenda qui rerum distinctio vel sint nobis repellat, nulla harum veritatis nesciunt mollitia temporibus, enim aliquam. Vero corrupti saepe culpa atque repudiandae porro illum vitae omnis architecto, non, at molestias numquam repellendus magnam molestiae? Id inventore ipsam asperiores autem soluta architecto blanditiis fuga tempora consectetur at! Necessitatibus voluptatem temporibus vero natus aliquam id in, cupiditate, labore, iusto iste eveniet provident. Natus architecto esse cum eveniet earum ratione consectetur ut, voluptate minima, expedita ipsum reiciendis, sed exercitationem.' },
	]

	const questions = questionsData.map(q => <Question title={q.title} text={q.text} key={q.id} />);

	return (
		<section className="faq outer">
			<div className="section-title">F.A.Q</div>
			<div className="container">
				{questions}
			</div>
		</section>
	)
}

export default FAQ;
