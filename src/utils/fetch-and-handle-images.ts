import getCatImage from '../services/get-cat-image';

type Config = {
	words: string[];
	height: number;
	width: number;
};

const fetchAndHandleImages = async (config: Config) => {
	console.log(`Fetching images... for words: ${config.words.join(', ')}`);
	const settledPromises = await Promise.allSettled(
		config.words.map(
			async word => getCatImage({text: word, height: config.height, width: config.width}),
		),
	);

	const images = settledPromises.map((settledPromise, index) => {
		if (settledPromise.status === 'fulfilled') {
			return settledPromise.value;
		}

		console.error(`There was an error when fetching image ${index + 1}: ${settledPromise.reason as string}`);
		return null;
	});

	if (images.includes(null)) {
		throw new Error('Due to an error when fetching images, we cannot merge and generate the meme');
	}

	console.log('Images fetched successfully!');

	return images as Buffer[];
};

export default fetchAndHandleImages;
