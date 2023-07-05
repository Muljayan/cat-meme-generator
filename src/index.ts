import dotenv from 'dotenv';
dotenv.config();

import getCatImage from './services/get-cat-image';
import {PromptTypes} from './types';
import mergeImages from './utils/merge-images';
import {close, prompt, promptWithValidation} from './utils/prompter';
import fetchAndHandleImages from './utils/fetch-and-handle-images';
import handleError from './utils/handle-error';
import configurations from './configurations';

const main = async () => {
	try {
		console.log('🐱 Meow! Let\'s merge two images and generate some memes');
		const shouldSetCustomDimensions = await prompt(`The default dimensions \nheight: ${configurations.height} \nwidth: ${configurations.width} \nPress 'y' if you want to update these values\n`);

		let {height, width} = configurations;

		if (shouldSetCustomDimensions.toLowerCase() === 'y') {
			height = await promptWithValidation('Enter the height of the image:  \n ', PromptTypes.DIGITS);
			console.log(`The height ${height} will be set to dimensions`);
			width = await promptWithValidation('Enter the width of the image:  \n ', PromptTypes.DIGITS);
			console.log(`The width ${width} will be set to dimensions`);
		} else {
			console.log('The default dimensions will be used');
		}

		const firstWord = await promptWithValidation('Enter the first word:', PromptTypes.LETTERS_AND_DIGITS);
		const secondWord = await promptWithValidation('Enter the second word:', PromptTypes.LETTERS_AND_DIGITS);

		console.log('Please hold while we generate your meme...');

		console.time('Time to execute: fetchAndHandleImages');
		const images = await fetchAndHandleImages({
			words: [firstWord, secondWord],
			height,
			width,
		});
		console.timeEnd('Time to execute: fetchAndHandleImages');
		console.log('Merging images...');
		await mergeImages(images, {
			height,
			width,
		});
	} catch (error) {
		handleError(error, 'There was an error and function execution has been halted');
	}

	close();
};

main().catch(console.error);
