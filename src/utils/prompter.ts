import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import isNumber from './is-number';
import {PromptTypes} from '../types';
import checkLettersAndDigits from './check-letters-and-digits';

const rl = readline.createInterface({
	input,
	output,
});

export const prompt = async (question: string) => rl.question(question);

type PromptValidationReturnType<T extends PromptTypes> = T extends PromptTypes.DIGITS ? number : string;

export const promptWithValidation = async <T extends PromptTypes>(question: string, type?: T): Promise<PromptValidationReturnType<T>> => {
	const inputValue = await rl.question(question);
	switch (type) {
		case PromptTypes.DIGITS:
			if (isNumber(inputValue)) {
				const digit = parseFloat(inputValue);
				return digit as PromptValidationReturnType<T>;
			}

			break;

		case PromptTypes.LETTERS_AND_DIGITS:
			if (checkLettersAndDigits(inputValue)) {
				return inputValue as PromptValidationReturnType<T>;
			}

			break;

		default:
	}

	console.log('You have not added a valid value try again');
	return promptWithValidation(question, type);
};

export const close = () => {
	rl.close();
};
