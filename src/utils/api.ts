import axios from 'axios';

const api = axios.create({
	// eslint-disable-next-line @typescript-eslint/naming-convention
	baseURL: 'https://cataas.com',
});

export default api;
