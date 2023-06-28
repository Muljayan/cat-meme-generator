const isNumber = (value: unknown): boolean => !isNaN(parseFloat(value as string));

export default isNumber;
