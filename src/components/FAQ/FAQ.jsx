import Question from './Question/Question';
import DownloadFile from '../DownloadFile/DownloadFile';
import file from '../../static/Регламент.pdf';
import './FAQ.scss';

const FAQ = () => {
	const questionsData = [
		{ id: 1, title: 'Допускается ли нахождение в одной команде учащихся из разных школ?', text: 'Да, допускается' },
		{
			id: 2, title: 'Как я могу поучаствовать в турнире?', text: 'Для начала - необходимо собрать команду из 5 человек. После этого каждому члену команды необходимо перейти по этой ссылке <> для  прохождения регистрации с помощью Телеграм-бота.', links: [
				{ href: 'https://t.me/SPKCSGOBOT' }
			]
		},
		{ id: 3, title: 'Как проходит процесс регистрации?', text: 'В Телеграм-боте вам необходимо будет ввести следующие данные: ФИО, придуманный никнейм, используемый для идентификации игрока непосредственно в рамках турнира, Ваши аккаунты в Discrod и Fastcup.' },
		{ id: 4, title: 'Как верифицируются участники турнира?', text: 'В процессе регистрации вам будет предложено отправить фотографию  документа, удостоверяющего личность. От участника не требуется изображение всего документа, на изображении должны быть видны только дата рождения, ФИО и фотография участника.' },
		{ id: 5, title: 'На основе какой площадки проводится турнир?', text: 'Площадка, на основе которой проводится турнир - Fastcup.' },
		{ id: 6, title: 'Будет ли турнир транслироваться в прямом эфире?', text: 'Да, прямая трансляция будет проходить на Youtube.' },
		{
			id: 7, title: 'Есть ли помимо сайта еще какие-либо информационные ресурсы турнира?', text: 'Официальный канал в Телеграме <> - используется для публикации актуальных новостей и важных сообщений.Discord сервер <> - используется для координации взаимодействиямежду непосредственными участниками и организаторами турнира. Доступ к нему имеют только игроки и организаторы.Официальная группа СПК в Вконтакте <>', links: [
				{ href: 'https://t.me/burning_cup' },
				{ href: 'https://discord.gg/7NHjPA4UhP' },
				{ href: 'https://t.me/SPKCSGOBOT' }
			]
		},
		{ id: 8, title: 'Я хочу ознакомиться с более подробной информацией о проведении турнира. Где мне ее найти?', text: 'Ознакомиться с регламентом турнира можно по ссылке <>.', download: <DownloadFile file={file} text='Ссылка для скачивания' /> }
	]

	const questions = questionsData.map(q => {
		const download = q.hasOwnProperty('download') ? q.download : false;
		const links = q.hasOwnProperty('links') ? q.links : [];

		return <Question title={q.title} text={q.text} key={q.id} download={download} links={links} />
	});

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
