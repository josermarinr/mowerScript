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

	const isOutHorizontal = horizontalInside(newMower, lawn);
	const isOutVertical = verticalInside(newMower, lawn);
	const isOtherMowerInLawn = pointNotAvailable(newMower.x, newMower.y, lawn);

	return isOutHorizontal && isOutVertical && isOtherMowerInLawn;
};
