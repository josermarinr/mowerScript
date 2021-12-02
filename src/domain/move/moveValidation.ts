import { LawnInterface } from "../../interface/Lawn.interface";
import { MowerInterface } from "../../interface/Mower.interface";
import { pointNotAvailable } from "../../tools/tools";
import { moveContext } from "./moveContext";

export const horizontalInside = (mower: MowerInterface, lawn: LawnInterface) =>
	!(mower.x < 0 || mower.x > lawn.width);

export const verticalInside = (mower: MowerInterface, lawn: LawnInterface) =>
	!(mower.y < 0 || mower.y > lawn.height);

export const nextMoveValid = (mower: MowerInterface, lawn: LawnInterface) => {
	const newMower = mower;
	const { toFront } = moveContext();
	toFront(newMower);
	if (horizontalInside(newMower, lawn)) false;
	else if (verticalInside(newMower, lawn)) false;
	else pointNotAvailable(newMower.x, newMower.y, lawn);

	return true;
};
