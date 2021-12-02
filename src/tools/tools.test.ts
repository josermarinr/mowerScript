import { fileToArray, isInsideOfLawn, pointNotAvailable } from "./tools";

describe("tools", () => {
	it("should return false when the mower is outside of lawn", () => {
		const mowerPosition = [10, 10];
		const lawn = {
			width: 5,
			height: 5,
			MowerPosition: [],
		};

		const result = isInsideOfLawn(mowerPosition[0], mowerPosition[1], lawn);

		expect(result).toBeFalsy;
	});

	it("should return false when in the lawn have a mower at the same position that the new one", () => {
		const mowerPosition = [5, 5];
		const lawn = {
			width: 5,
			height: 5,
			MowerPosition: [{ x: 5, y: 5, direction: "N" }],
		};

		const result = pointNotAvailable(mowerPosition[0], mowerPosition[1], lawn);

		expect(result).toBeFalsy;
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
});
