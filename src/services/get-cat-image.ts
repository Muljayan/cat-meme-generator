import constants from '../constants';
import api from '../utils/api';

type Options = {
	text: string;
	width?: number;
	height?: number;

};

const getCatImage = async ({
	text,
	width = constants.width,
	height = constants.height,
}: Options) => {
	const cat = await api.get<ArrayBuffer>(`/cat/says/${text}?width=${width}&height=${height}`, {responseType: 'arraybuffer'});
	return Buffer.from(cat.data);
};

export default getCatImage;
