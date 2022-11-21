import './DownloadFile.scss';


const DownloadFile = (props) => {
	const downloadFile = file => {
		const link = document.createElement('a');
		link.href = file;
		link.download = file.split('/')[3].split('.')[0] + '.pdf';
		link.click();
	}

	return (
		<button className="download-rule" onClick={() => downloadFile(props.file)}>{props.text}</button>
	)
}

export default DownloadFile;
