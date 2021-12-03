import { LawnInterface } from "../../interface/Lawn.interface";
import { MowerInterface } from "../../interface/Mower.interface";
import { nextMoveValid } from "./moveValidation";

export const moveContext = () => {
	const toLeft = (mower: MowerInterface) => {
		switch (mower.direction) {
			case "E":
				mower.direction = "N";
				break;
			case "N":
				mower.direction = "W";
				break;
			case "W":
				mower.direction = "S";
				break;
			case "S":
				mower.direction = "S";
				break;
		}
	};

	const toRight = (mower: MowerInterface) => {
		switch (mower.direction) {
			case "E":
				mower.direction = "S";
				break;
			case "S":
				mower.direction = "W";
				break;
			case "W":
				mower.direction = "N";
				break;
			case "N":
				mower.direction = "E";
				break;
		}
	};

	const toFront = (mower: MowerInterface) => {
		switch (mower.direction) {
			case "N":
				mower.y++;
				break;
			case "S":
				mower.y--;
				break;
			case "E":
				mower.x++;
				break;
			case "W":
				mower.x--;
				break;
		}
	};

	const toBack = (mower: MowerInterface) => {
		switch (mower.direction) {
			case "N":
				mower.y--;
				break;
			case "S":
				mower.y++;
				break;
			case "E":
				mower.x--;
				break;
			case "W":
				mower.x++;
				break;
		}
	};

	const advancTofrontIfIsValid = (
		mower: MowerInterface,
		lawn: LawnInterface
	) => {
		const nextMove = nextMoveValid(mower, lawn);
		if (nextMove) {
			toFront(mower);
		}
	};

	const moving = ({
		lawn,
		mower,
		sequencies,
	}: {
		mower: MowerInterface;
		sequencies: string;
		lawn: LawnInterface;
	}) => {
		sequencies.split("").map((sec) => {
			switch (sec) {
				case "L":
					toLeft(mower);
					break;
				case "R":
					toRight(mower);
					break;
				case "F":
					advancTofrontIfIsValid(mower, lawn);
					break;
				default:
					console.error(`Error: Sequency not valid ${sec}`);
			}
		});
	};

	return { toLeft, toRight, toFront, toBack, moving };
};
