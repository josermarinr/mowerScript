import { lawnEntity } from "./lanwEntity";

describe(lawnEntity, () => {
	it("should return the new size of lawn after set it", () => {
		const width = 5;
		const height = 5;
		const lawn = lawnEntity({ height: height, width: width });
		const newWidth = 10;
		const newheight = 10;
		lawn.newSize(newWidth, newheight);
		expect(lawn.getSize()).toStrictEqual({
			width: newWidth,
			height: newheight,
		});
	});

	it("should return the mowerPosition on lawn after set it", () => {
		const width = 5;
		const height = 5;
		const mower = { x: 3, y: 3, direction: "N" };
		const lawn = lawnEntity({ height: height, width: width });
		lawn.addMowerPosition(mower);
		expect(lawn.getMowerPosition()).toStrictEqual([mower]);
	});

	it("should return the mowerPosition of many mower on lawn after set all", () => {
		const width = 5;
		const height = 5;
		const mower1 = { x: 3, y: 3, direction: "N" };
		const mower2 = { x: 0, y: 3, direction: "E" };
		const lawn = lawnEntity({ height: height, width: width });
		lawn.addMowerPosition(mower1);
		lawn.addMowerPosition(mower2);
		expect(lawn.getMowerPosition()).toStrictEqual([mower1, mower2]);
	});
});
