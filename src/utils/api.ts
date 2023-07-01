import axios from 'axios';
import configurations from '../configurations';

const api = axios.create({
	// eslint-disable-next-line @typescript-eslint/naming-convention
	baseURL: configurations.baseUrl,
});

export default api;
