import api from '../utils/api';

type Options = {
	text: string;
	width: number;
	height: number;

};

const getCatImage = async ({
	text,
	width,
	height,
}: Options) => {
	console.time(`Time to execute api call for text: ${text}`);
	const cat = await api.get<ArrayBuffer>(`/cat/says/${text}?width=${width}&height=${height}`, {responseType: 'arraybuffer'});
	console.timeEnd(`Time to execute api call for text: ${text}`);
	return Buffer.from(cat.data);
};

export default getCatImage;
