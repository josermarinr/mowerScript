import { MowerInterface } from "../interface/Mower.interface";

export const mowerEntity = (mowerInString: string): MowerInterface => {
	const stringToArray = mowerInString.split(" ");
	const mower = {
		x: Number(stringToArray[0]),
		y: Number(stringToArray[1]),
		direction: stringToArray[2],
	};
	return mower;
};
