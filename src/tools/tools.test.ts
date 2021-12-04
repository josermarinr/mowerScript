import {
	fileToArray,
	isInsideOfLawn,
	pointNotAvailable,
	splitMowerByFile,
	splitSequenciesByFile,
} from "./tools";

describe("tools", () => {
	it("should return false when the mower is outside of lawn", () => {
		const mowerPosition = [10, 10];
		const lawn = {
			width: 5,
			height: 5,
			mowerPosition: [],
		};

		const result = isInsideOfLawn(mowerPosition[0], mowerPosition[1], lawn);

		expect(result).toBe(false);
	});

	it("should return false when in the lawn have a mower at the same position that the new one", () => {
		const mowerPosition = [5, 5];
		const lawn = {
			width: 5,
			height: 5,
			mowerPosition: [{ x: 5, y: 5, direction: "N" }],
		};

		const result = pointNotAvailable(mowerPosition[0], mowerPosition[1], lawn);

		expect(result).toBe(false);
	});

	it("should return true when in the lawn have a mower at the other position that the new one", () => {
		const mowerPosition = [5, 5];
		const lawn = {
			width: 5,
			height: 5,
			mowerPosition: [{ x: 4, y: 5, direction: "N" }],
		};

		const result = pointNotAvailable(mowerPosition[0], mowerPosition[1], lawn);

		expect(result).toBe(true);
	});

	it("should return true when in the lawn not have mowe", () => {
		const mowerPosition = [5, 5];
		const lawn = {
			width: 5,
			height: 5,
			mowerPosition: [],
		};

		const result = pointNotAvailable(mowerPosition[0], mowerPosition[1], lawn);

		expect(result).toBe(true);
	});
	it("should return an array of data when we passe the good url data", () => {
		const result = fileToArray("./src/mock/mock.txt");
		const expectedResult = [
			"5 5",
			"1 2 N",
			"LFLFL",
			"3 3 E ",
			"FFFLL",
			"8 9 E",
			"FLFLRF",
			"1 3 E",
			"FFLFR",
			"1 2 N",
			"FF",
			"4 0 N",
			"FFFFF",
		];
		expect(result).toStrictEqual(expectedResult);
	});

	it("should return an array of mower from the data array", () => {
		const data = fileToArray("./src/mock/mock.txt");
		const lawnLine = data.shift();
		console.log(data);
		const result = splitMowerByFile(data);
		console.log(result);
		const expectedResult = [
			"1 2 N",
			"3 3 E ",
			"8 9 E",
			"1 3 E",
			"1 2 N",
			"4 0 N",
		];
		expect(result).toStrictEqual(expectedResult);
	});
	it("should return an array of sequencies from the data array", () => {
		const data = fileToArray("./src/mock/mock.txt");
		const lawnLine = data.shift();
		console.log(data);
		const result = splitSequenciesByFile(data);
		console.log(result);
		const expectedResult = ["LFLFL", "FFFLL", "FLFLRF", "FFLFR", "FF", "FFFFF"];
		expect(result).toStrictEqual(expectedResult);
	});
});
