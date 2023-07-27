export function fibonacci(input: number): number {
	if (input < 1) {
		return 0;
	}

	if (input < 2) {
		return 1;
	}

	return fibonacci(input - 2) + fibonacci(input - 1);
}
