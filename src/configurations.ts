const configurations = {
	baseUrl: process.env.BASE_URL ?? 'https://cataas.com',
	height: parseInt(process.env.DEFAULT_HEIGHT!, 10) || 500,
	width: parseInt(process.env.DEFAULT_WIDTH!, 10) || 400,
	outputFolder: process.env.OUTPUT_FOLDER ?? 'output',
};

export default configurations;
