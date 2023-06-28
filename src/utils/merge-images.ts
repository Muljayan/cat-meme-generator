
import sharp from 'sharp';

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
	const outputPath = `./output/${outputFileName}`;

	void output.toFile(outputPath);
	console.log(`File saved in ${outputPath}`);
};

export default mergeImages;
