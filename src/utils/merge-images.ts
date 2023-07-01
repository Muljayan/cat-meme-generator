
import sharp from 'sharp';
import configurations from '../configurations';

type Options = {
	height: number;
	width: number;
};

const mergeImages = async (buffers: Buffer[], {height, width}: Options) => {
	const output = sharp({
		create: {
			width: buffers.length * width,
			height,
			channels: 3,
			background: {r: 0, g: 0, b: 0, alpha: 0},
		},
	});

	output.composite(buffers.map((buffer, index) => (
		{
			input: buffer,
			top: 0,
			left: width * index,
		}
	)));

	const outputFileName = `meme-${new Date().getTime()}.jpg`;
	const outputPath = `./${configurations.outputFolder}/${outputFileName}`;

	await output.toFile(outputPath);
	console.log(`Files merged and saved. You can find your meme here : ${outputPath}`);
};

export default mergeImages;
