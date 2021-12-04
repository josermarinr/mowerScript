import { mowerEntity } from "./mowerEntity";

describe(mowerEntity, () => {
	it("should return an mower object from string data", () => {
		const data = "1 2 N";
		const mower = mowerEntity(data);
		const expectResult = {
			x: 1,
			y: 2,
			direction: "N",
		};
		expect(mower).toStrictEqual(expectResult);
	});
});
