import { LawnInterface } from "../interface/Lawn.interface";
import * as fs from "fs";
export const isInsideOfLawn = (x: number, y: number, lawn: LawnInterface) =>
	!(x < 0 || y < 0 || x > lawn.width || y > lawn.height);

export const pointNotAvailable = (
	x: number,
	y: number,
	lawn: LawnInterface
) => {
	lawn.MowerPosition.forEach((mower) => {
		if (x === mower.x && y === mower.y) false;
	});
};

export const fileToArray = (fileUrl: string) => {
	const ArrayFromFile = fs.readFileSync(fileUrl).toString().split("\n");
	if (ArrayFromFile.length > 0) {
		return ArrayFromFile;
	} else {
		return ["error transforming the file"];
	}
};
