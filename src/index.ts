import constants from './constants';
import getCatImage from './services/get-cat-image';
import {PromptTypes} from './types';
import mergeImages from './utils/merge-images';
import {close, prompt, promptWithValidation} from './utils/prompter';

const main = async () => {
	console.log('🐱 Meow! Let\'s merge two images and generate some memes');
	const shouldSetCustomDimensions = await prompt(`The default dimensions \nheight: ${constants.height} \nwidth: ${constants.width} \nPress 'y' if you want to update these values\n`);

	let {height, width} = constants;

	if (shouldSetCustomDimensions.toLowerCase() === 'y') {
		height = await promptWithValidation('Enter the height of the image:  \n ', PromptTypes.DIGITS);
		console.log(`The height ${height} will be set to dimensions`);
		width = await promptWithValidation('Enter the width of the image:  \n ', PromptTypes.DIGITS);
		console.log(`The width ${width} will be set to dimensions`);
	} else {
		console.log('The default dimensions will be used');
	}

	const firstWord = await promptWithValidation('Enter the first word:', PromptTypes.LETTERS_AND_DIGITS);
	const firstImagePromise = getCatImage({text: firstWord, height, width});
	const secondWord = await promptWithValidation('Enter the second word:', PromptTypes.LETTERS_AND_DIGITS);
	const secondImagePromise = getCatImage({text: secondWord, height, width});

	console.log('Please hold while we generate your meme...');

	const imageBuffers = await Promise.all([firstImagePromise, secondImagePromise]);
	await mergeImages(imageBuffers, {
		height,
		width,
	});
	close();
};

main().catch(console.error);
