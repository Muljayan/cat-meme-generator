const regex = /^[a-z0-9]+$/i;

// This is to ensure special characters aren't included
const checkLettersAndDigits = (value: string) => regex.test(value);

export default checkLettersAndDigits;
