import {
	horizontalInside,
	nextMoveValid,
	verticalInside,
} from "./moveValidation";

describe("move validation test", () => {
	it("should return false when the mower is outside of lawn in horizontal", () => {
		const mower = { x: 10, y: 10, direction: "N" };
		const lawn = {
			width: 0,
			height: 0,
			mowerPosition: [{ x: 2, y: 2, direction: "N" }],
		};

		const result = horizontalInside(mower, lawn);

		expect(result).toBeFalsy;
	});

	it("should return false when the mower is outside of lawn in vertical", () => {
		const mower = { x: 10, y: 10, direction: "N" };
		const lawn = {
			width: 0,
			height: 0,
			mowerPosition: [{ x: 2, y: 2, direction: "N" }],
		};

		const result = verticalInside(mower, lawn);

		expect(result).toBeFalsy;
	});

	it("should return false when the next step is not valid", () => {
		const mower = { x: 1, y: 1, direction: "N" };
		const lawn = {
			width: 5,
			height: 5,
			mowerPosition: [{ x: 1, y: 2, direction: "N" }],
		};

		const result = nextMoveValid(mower, lawn);

		expect(result).toBe(false);
	});

	it("should return true when the next step is valid", () => {
		const mower = { x: 1, y: 1, direction: "N" };
		const lawn = {
			width: 5,
			height: 5,
			mowerPosition: [{ x: 3, y: 3, direction: "N" }],
		};

		const result = nextMoveValid(mower, lawn);

		expect(mower).toStrictEqual(mower);
		expect(result).toBe(true);
	});
	it("should return false when the next step is not valid", () => {
		const mower = { x: -1, y: 1, direction: "N" };
		const lawn = {
			width: 5,
			height: 5,
			mowerPosition: [{ x: 3, y: 3, direction: "N" }],
		};

		const result = nextMoveValid(mower, lawn);
		expect(result).toBe(false);
		expect(mower).toStrictEqual(mower);
	});
});
