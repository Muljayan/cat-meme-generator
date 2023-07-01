const handleError = (error: unknown, description: string) => {
	if (error instanceof Error) {
		console.error(`${description}: ${error.message}`);
	} else {
		console.error('An unknown error occurred', error);
	}
};

export default handleError;
