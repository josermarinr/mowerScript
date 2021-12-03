import { moveContext } from "./moveContext";

describe(moveContext, () => {
	it("should change the direction of mower when is turn to Right", () => {
		const mower = { x: 1, y: 1, direction: "N" };

		const { toRight } = moveContext();
		toRight(mower);

		expect(mower.direction).toBe("E");
	});

	it("should change the direction of mower when is turn to Left", () => {
		const mower = { x: 1, y: 1, direction: "N" };

		const { toLeft } = moveContext();
		toLeft(mower);

		expect(mower.direction).toBe("W");
	});

	it("should the mower advance one point", () => {
		const mower = { x: 1, y: 1, direction: "N" };

		const { toFront } = moveContext();
		toFront(mower);

		expect(mower.y).toBe(2);
	});

	it("should the mower reduce one point", () => {
		const mower = { x: 1, y: 2, direction: "N" };

		const { toBack } = moveContext();
		toBack(mower);

		expect(mower.y).toBe(1);
	});

	it("the mower should move when we passe a sequencies of command", () => {
		const lawn = { width: 5, height: 5, mowerPosition: [] };
		const mower = { x: 2, y: 2, direction: "N" };
		const sequency = "FRFRF";
		const { moving } = moveContext();
		moving({ mower: mower, lawn: lawn, sequencies: sequency });

		expect(mower.x).toBe(3);
		expect(mower.y).toBe(2);
	});

	it("the mower should move when we passe a sequencies of command", () => {
		const lawn = { width: 5, height: 5, mowerPosition: [] };
		const mower = { x: 0, y: 0, direction: "N" };
		const sequency = "FFLFF";
		const { moving } = moveContext();
		moving({ mower: mower, lawn: lawn, sequencies: sequency });

		expect(mower.x).toBe(0);
		expect(mower.y).toBe(2);
	});
});
