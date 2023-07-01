import dotenv from 'dotenv';
dotenv.config();

import {mkdir} from 'node:fs/promises';
import handleError from '../utils/handle-error';
import configurations from '../configurations';

const createOutputFolder = async () => {
	try {
		const createdFolder = await mkdir(configurations.outputFolder, {recursive: true});
		console.log(createdFolder ? 'Output folder created' : 'Output folder already exists');
	} catch (err: unknown) {
		handleError(err, 'There was an error when creating folder');
	}
};

createOutputFolder().catch(console.error);
